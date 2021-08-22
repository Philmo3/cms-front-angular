import { Component, OnInit } from "@angular/core";
import { SitesService } from "src/app/services/sites.service";

@Component({
	selector: "app-sites",
	templateUrl: "./sites.component.html",
	styleUrls: ["./sites.component.scss"]
})
export class SitesComponent implements OnInit {
	fetchData = async () => {
		return await this.siteService.search({}, true).toPromise();
	};

	constructor(private siteService: SitesService) {}

	ngOnInit(): void {}
}
