import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscriber } from "rxjs";
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

	private endPoint = environment.apiUrl + "/auth";

	constructor(private httpClient: HttpClient) {}

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

	private loginPipe(source: Observable<HttpResponse<User>>) {
		return new Observable<HttpResponse<User>>(subscriber => {
			return source.subscribe({
				next: (user: HttpResponse<User>) =>
					this.onLoginSuccess(subscriber, user),
				error: err => subscriber.error(err)
			});
		});
	}

	private onLoginSuccess(
		subscriber: Subscriber<HttpResponse<User>>,
		response: HttpResponse<User>
	) {
		this.fetchCurrentUserData()
			.toPromise()
			.then(() => {
				subscriber.complete();
			})
			.catch(error => {
				subscriber.error(error);
			});
	}

	private fetchCurrentUserData() {
		return this.httpClient
			.post<User>(this.endPoint + "/me", {}, { withCredentials: true })
			.pipe(this.onFetchingUserData.bind(this));
	}

	private onFetchingUserData(source: Observable<User>) {
		return new Observable<User>(subscriber => {
			return source.subscribe({
				next: (user: User) => this.setCurrentUser(subscriber, user),
				error: error => subscriber.error(error),
				complete: () => subscriber.complete()
			});
		});
	}

	private setCurrentUser(subscriber: Subscriber<User>, user: User) {
		this.currentUser$.next(user);
		this.currentUser = user;
		subscriber.next(user);
	}
}
