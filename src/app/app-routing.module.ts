import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsLoggedInGuard } from "./guards/is-logged-in.guard";

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
	},
	{
		path: "dashboard",
		loadChildren: () =>
			import("./pages/dashboard/dashboard.module").then(
				module => module.DashboardModule
			),
		canActivate: [IsLoggedInGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
