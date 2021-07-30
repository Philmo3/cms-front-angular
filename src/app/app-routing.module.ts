import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: () =>
			import("./pages/home-page/home-page.module").then(
				module => module.HomePageModule
			)
	},
	{
		path: "sign-up",
		loadChildren: () =>
			import("./pages/customer-sign-up/customer-sign-up.module").then(
				module => module.CustomerSignUpModule
			)
	},
	{
		path: "login",
		loadChildren: () =>
			import("./pages/login/login.module").then(module => module.LoginModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
