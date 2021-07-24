import { NgModule } from "@angular/core";
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
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { HeaderComponent } from "./components/header/header.component";
import { BurgerMenuComponent } from "./components/header/burger-menu/burger-menu.component";
registerLocaleData(en);

@NgModule({
	declarations: [AppComponent, HeaderComponent, BurgerMenuComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NzMenuModule,
		NzDrawerModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent]
})
export class AppModule {}
