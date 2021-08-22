import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Company } from "src/app/shared/types/company.type";
import { User } from "src/app/shared/types/users.type";

@Component({
	selector: "app-logged-in-nav",
	templateUrl: "./logged-in-nav.component.html",
	styleUrls: ["./logged-in-nav.component.scss"]
})
export class LoggedInNavComponent implements OnInit {
	isCollapsed = false;

	currentUser: User | undefined;
	currentUserCompany: Company | undefined;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.currentUser = this.authService.currentUser;
		this.currentUserCompany = this.currentUser?.company;
	}

	logout() {
		this.authService
			.logout()
			.toPromise()
			.then(() => {
				this.router.navigate([""]);
			});
	}
}
