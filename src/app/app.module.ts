import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { HeaderComponent } from "./components/header/header.component";
import { BurgerMenuComponent } from "./components/header/burger-menu/burger-menu.component";
import { AuthService } from "./services/auth.service";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { LoggedInNavComponent } from "./components/logged-in-nav/logged-in-nav.component";
registerLocaleData(en);

function authLoader(authService: AuthService) {
	console.log("in authLoader");
	return () =>
		authService
			.onAppInit()
			.catch(error => console.log(error))
			.finally(() => {
				console.log("in authloader final");
			});
}

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		BurgerMenuComponent,
		LoggedInNavComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NzMenuModule,
		NzDrawerModule,
		NzLayoutModule,
		NzIconModule
	],
	providers: [
		{
			provide: NZ_I18N,
			useValue: en_US
		},
		{
			provide: APP_INITIALIZER,
			deps: [AuthService],
			useFactory: authLoader,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
