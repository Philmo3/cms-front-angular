import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	isLoading = false;

	loginForm = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		password: new FormControl("", [Validators.required])
	});

	constructor(private authService: AuthService) {}

	ngOnInit(): void {}

	async login() {
		if (this.loginForm.valid) {
			this.authService
				.login(
					this.loginForm.get("email")?.value,
					this.loginForm.get("password")?.value
				)
				.toPromise()
				.catch(error => console.log(error))
				.then(() => {
					this.isLoading = false;
					console.log(this.authService.currentUser);
				});
		}
	}
}
