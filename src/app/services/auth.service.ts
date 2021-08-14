import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscriber } from "rxjs";
import { subscribeOn, takeUntil } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../shared/types/users.type";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	currentUser: User | undefined = undefined;

	private currentUser$: BehaviorSubject<User | undefined> = new BehaviorSubject(
		this.currentUser
	);
	currentUserObservable$: Observable<User | undefined> =
		this.currentUser$.asObservable();

	private refreshProcessIsStarted = false;

	private endPoint = environment.apiUrl + "/auth";

	constructor(private httpClient: HttpClient) {}

	async onAppInit() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.refreshToken()
					.toPromise()
					.then(async () => {
						await this.fetchCurrentUserData().toPromise();
						resolve(true);
					});
			} catch (err) {
				this.currentUser$.next(undefined);
				reject("refeshed failed");
			}
		});
	}

	login(email: string, password: string): Observable<HttpResponse<User>> {
		return this.httpClient
			.post<User>(
				this.endPoint + "/login",
				{
					username: email,
					password
				},
				{
					observe: "response",
					withCredentials: true
				}
			)
			.pipe(this.loginPipe.bind(this));
	}

	logout() {
		return this.httpClient
			.post<any>(
				this.endPoint + "/logout",
				{},
				{
					withCredentials: true
				}
			)
			.pipe(this.logoutPipe.bind(this));
	}
	private loginPipe(source: Observable<HttpResponse<User>>) {
		return new Observable<HttpResponse<User>>(subscriber => {
			return source.subscribe({
				next: () => this.onLoginSuccess(subscriber),
				error: err => subscriber.error(err)
			});
		});
	}

	private logoutPipe(source: Observable<any>) {
		return new Observable<any>(subscriber => {
			return source.subscribe({
				next: () => this.onLogoutSuccess(subscriber),
				error: err => subscriber.error(err),
				complete: subscriber.complete
			});
		});
	}

	private onLoginSuccess(subscriber: Subscriber<HttpResponse<User>>) {
		this.fetchCurrentUserData()
			.toPromise()
			.then(() => {
				subscriber.complete();
			})
			.catch(error => {
				subscriber.error(error);
			});
	}

	private onLogoutSuccess(subscriber: Subscriber<any>) {
		this.setCurrentUser(undefined);
		subscriber.complete();
	}

	private fetchCurrentUserData() {
		return this.httpClient
			.post<User>(this.endPoint + "/me", {}, { withCredentials: true })
			.pipe(this.onFetchingUserData.bind(this));
	}

	private onFetchingUserData(source: Observable<User>) {
		return new Observable<User>(subscriber => {
			return source.subscribe({
				next: (user: User) => this.onSucessFetchUserData(subscriber, user),
				error: error => subscriber.error(error),
				complete: () => subscriber.complete()
			});
		});
	}

	private onSucessFetchUserData(subscriber: Subscriber<User>, user: User) {
		this.setCurrentUser(user);
		this.refreshProcess();
		subscriber.next(user);
	}

	private setCurrentUser(user: User | undefined) {
		this.currentUser$.next(user);
		this.currentUser = user;
	}

	private refreshProcess() {
		if (this.currentUser && !this.refreshProcessIsStarted) {
			setInterval(() => {
				if (this.currentUser) {
					this.refreshToken().toPromise();
				}
			}, 30000);
			this.refreshProcessIsStarted = true;
		}
	}

	private refreshToken() {
		return this.httpClient.post(
			this.endPoint + "/refresh",
			{},
			{
				withCredentials: true
			}
		);
	}
}
