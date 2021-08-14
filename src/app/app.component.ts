import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { User } from "./shared/types/users.type";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	loggedInUser: User | undefined;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.authService.currentUserObservable$.subscribe(user => {
			this.loggedInUser = user;
		});
	}
}
