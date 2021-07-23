import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormSectionModule } from "../form-section/form-section.module";

import { NzStepsModule } from "ng-zorro-antd/steps";
import { NzButtonModule } from "ng-zorro-antd/button";
import { FormWithSteperComponent } from "./form-with-steper.component";
import { NzGridModule } from "ng-zorro-antd/grid";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	declarations: [FormWithSteperComponent],
	imports: [
		CommonModule,
		NzStepsModule,
		NzButtonModule,
		FormSectionModule,
		NzGridModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	],
	exports: [FormWithSteperComponent]
})
export class FormWithSteperModule {}
