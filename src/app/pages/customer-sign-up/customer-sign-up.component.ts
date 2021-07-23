import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import {
	FormTypedControl,
	FormWithStepper
} from "src/app/components/form-with-steper/form-with-steper.type";
import { UserService } from "src/app/services/user-service.service";
import { AsyncEmailValidator } from "src/app/shared/asyncValidators/asyncEmailValidator";
import { EqualFieldValidator } from "src/app/shared/validator/equalFieldValidator";

@Component({
	selector: "app-customer-sign-up",
	templateUrl: "./customer-sign-up.component.html",
	styleUrls: ["./customer-sign-up.component.scss"]
})
export class CustomerSignUpComponent implements OnInit {
	signUpFormStepper: FormWithStepper[] = [
		{
			sectionTitle: "Personal Info",
			formGroups: [
				new FormGroup({
					name: new FormTypedControl("text", "", [Validators.required], null, [
						{ required: true }
					]),
					lastName: new FormTypedControl(
						"text",
						"",
						[Validators.required],
						null,
						[{ required: true }]
					),
					email: new FormTypedControl(
						"text",
						"",
						[Validators.required, Validators.email],
						[AsyncEmailValidator.userEmailValidator(this.userService)],
						[{ required: true }]
					)
				}),
				new FormGroup({
					password: new FormTypedControl(
						"password",
						"",
						[Validators.required, Validators.minLength(10)],
						null,
						[{ required: true }]
					),
					confirmPassword: new FormTypedControl(
						"password",
						"",
						[Validators.required, EqualFieldValidator.validator("password")],
						null,
						[{ required: true }]
					)
				})
			],
			sectionNumber: 0
		}
	];

	constructor(private userService: UserService) {}

	ngOnInit(): void {}
}
