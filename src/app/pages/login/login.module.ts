import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzSpinModule } from "ng-zorro-antd/spin";

const routes: Routes = [
	{
		path: "",
		component: LoginComponent
	}
];

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		NzFormModule,
		NzInputModule,
		NzButtonModule,
		NzSpinModule
	],
	exports: [RouterModule]
})
export class LoginModule {}
