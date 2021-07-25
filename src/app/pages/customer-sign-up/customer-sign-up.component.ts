import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import {
	DropDownDataType,
	FormTypedControl,
	FormWithStepper
} from "src/app/shared/types/form-with-steper.type";
import { UserService } from "src/app/services/user-service.service";
import { AsyncEmailValidator } from "src/app/shared/asyncValidators/asyncEmailValidator";
import { EqualFieldValidator } from "src/app/shared/validator/equalFieldValidator";
import { CompanyService } from "src/app/services/company.service";
import { CountryService } from "src/app/services/country.service";
import { count } from "rxjs/operators";

@Component({
	selector: "app-customer-sign-up",
	templateUrl: "./customer-sign-up.component.html",
	styleUrls: ["./customer-sign-up.component.scss"]
})
export class CustomerSignUpComponent implements OnInit {
	signUpFormStepper: FormWithStepper[] = [
		{
			sectionTitle: "Personal Information",
			formGroups: [
				new FormGroup({
					name: new FormTypedControl("text", "", [Validators.required], null, [
						{ required: true },
						"Your name is required"
					]),
					lastName: new FormTypedControl(
						"text",
						"",
						[Validators.required],
						null,
						{ required: true }
					),
					email: new FormTypedControl(
						"text",
						"",
						[Validators.required, Validators.email],
						[AsyncEmailValidator.userEmailValidator(this.userService)],
						{ required: true }
					)
				}),
				new FormGroup({
					password: new FormTypedControl(
						"password",
						"",
						[Validators.required, Validators.minLength(10)],
						null,
						{ required: true },
						"The password is required and must have 10 or more character"
					),
					confirmPassword: new FormTypedControl(
						"password",
						"",
						[Validators.required, EqualFieldValidator.validator("password")],
						null,
						{ required: true },
						"The password confirmation is required, must have 10 or more character and be equal to the password"
					)
				})
			],
			sectionNumber: 0
		},
		{
			sectionTitle: "Company Information",
			sectionNumber: 1,
			formGroups: [
				new FormGroup({
					name: new FormTypedControl(
						"text",
						"",
						Validators.required,
						null,
						{},
						"The name is required"
					),
					email: new FormTypedControl(
						"text",
						"",
						[Validators.required, Validators.email],
						AsyncEmailValidator.companyEmailValidator(this.companyService),
						{},
						"The email is required or is already taken"
					),
					phone: new FormTypedControl(
						"text",
						"",
						[Validators.required, Validators.pattern("")],
						null,
						{},
						"The phone is required"
					),
					conctactPerson: new FormTypedControl(
						"text",
						"",
						Validators.required,
						null,
						{},
						"Contact person is required"
					),
					country: new FormTypedControl<DropDownDataType>(
						"dropDown",
						"",
						Validators.required,
						null,
						{},
						"Country is required"
					)
				})
			]
		}
	];

	constructor(
		private userService: UserService,
		private companyService: CompanyService,
		private coutryService: CountryService
	) {}

	ngOnInit(): void {
		this.setCountryData();
	}

	private setCountryData() {
		const section = this.signUpFormStepper.find(
			section => section.sectionTitle === "Company Information"
		);

		const countryControl = section?.formGroups[0].get(
			"country"
		) as FormTypedControl<DropDownDataType>;

		if (countryControl) {
			this.coutryService
				.getAllCountries()
				.toPromise()
				.then(countries => {
					const data: DropDownDataType[] = [];

					countries.forEach(country => {
						data.push({
							label: country.name,
							value: country.name
						});
					});
					countryControl.setData(data);
				});
		}
	}
}
