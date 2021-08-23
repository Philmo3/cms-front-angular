import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAvatarModule } from "ng-zorro-antd/avatar";

import { ListingComponent } from "./listing.component";
import { ListingCardComponent } from "./listing-card/listing-card.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	declarations: [ListingComponent, ListingCardComponent],
	imports: [
		CommonModule,
		NzSpinModule,
		NzCardModule,
		NzAvatarModule,
		SharedModule
	],
	exports: [ListingComponent]
})
export class ListingModule {}
