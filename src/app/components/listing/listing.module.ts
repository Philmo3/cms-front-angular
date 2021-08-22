import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzSpinModule } from "ng-zorro-antd/spin";
import { ListingComponent } from "./listing.component";

@NgModule({
	declarations: [ListingComponent],
	imports: [CommonModule, NzSpinModule],
	exports: [ListingComponent]
})
export class ListingModule {}
