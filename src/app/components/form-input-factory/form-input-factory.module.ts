import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormInputFactoryComponent } from "./form-input-factory.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [FormInputFactoryComponent],
	imports: [
		CommonModule,
		NzInputModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		NzFormModule,
		NzSelectModule
	],
	exports: [FormInputFactoryComponent]
})
export class FormInputFactoryModule {}
