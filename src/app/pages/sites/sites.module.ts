import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SitesComponent } from "./sites.component";
import { ListingModule } from "src/app/components/listing/listing.module";

const routes: Routes = [
	{
		path: "",
		component: SitesComponent
	}
];

@NgModule({
	declarations: [SitesComponent],
	imports: [CommonModule, RouterModule.forChild(routes), ListingModule],
	exports: [RouterModule]
})
export class SitesModule {}
