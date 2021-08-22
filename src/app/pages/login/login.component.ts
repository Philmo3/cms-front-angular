import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	isLoading = false;

	userNotFoundError = false;

	loginForm = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		password: new FormControl("", [Validators.required])
	});

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	async login() {
		if (this.loginForm.valid) {
			this.isLoading = true;
			setTimeout(() => {
				this.authService
					.login(
						this.loginForm.get("email")?.value,
						this.loginForm.get("password")?.value
					)
					.toPromise()
					.then(() => {
						this.isLoading = false;
						this.userNotFoundError = false;
						this.router.navigate(["sites"]);
					})
					.catch(error => {
						this.isLoading = false;
						this.userNotFoundError = true;
					});
			}, 3000);
		}
	}
}
