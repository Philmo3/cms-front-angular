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
import { CompanyDto } from "src/app/shared/dtos/company.dto";
import { UserDto } from "src/app/shared/dtos/user.dto";

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
			sectionNumber: 1
		},
		{
			sectionTitle: "Company Information",
			sectionNumber: 0,
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
					contactPerson: new FormTypedControl(
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

	creationState: "creating" | "finished" = "creating";
	creationMessage = "Creating your account";

	onFinish = async () => {
		const company = await this.companyService
			.create(
				this.getFormSectionValueByTitle<CompanyDto>("Company Information")
			)
			.toPromise();

		const userDto = {
			...this.getFormSectionValueByTitle<Partial<UserDto>>(
				"Personal Information"
			),
			companyId: company._id
		};

		await this.userService.create(userDto as UserDto).toPromise();

		this.creationState = "finished";
	};

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

	private getFormSectionValueByTitle<F>(title: string): F {
		const section = this.signUpFormStepper.find(
			formStep => formStep.sectionTitle === title
		);

		let formsValue: Partial<F> = {};
		section?.formGroups.forEach((group: FormGroup) => {
			formsValue = { ...formsValue, ...(group.value as Partial<F>) };
		});

		console.log(formsValue);
		return formsValue as F;
	}
}
