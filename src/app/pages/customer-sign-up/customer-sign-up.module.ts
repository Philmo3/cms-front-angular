import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerSignUpComponent } from "./customer-sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FormWithSteperModule } from "src/app/components/form-with-steper/form-with-steper.module";
import { CountryService } from "src/app/services/country.service";

import { NzSpinModule } from "ng-zorro-antd/spin";
const routes: Routes = [
	{
		path: "",
		component: CustomerSignUpComponent
	}
];

@NgModule({
	declarations: [CustomerSignUpComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		FormWithSteperModule,
		NzSpinModule
	],
	exports: [RouterModule],
	providers: [CountryService]
})
export class CustomerSignUpModule {}
