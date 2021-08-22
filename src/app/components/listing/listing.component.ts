import { Component, Input, OnInit } from "@angular/core";
import { SearchResultDto } from "src/app/shared/dtos/searchResult.dto";

@Component({
	selector: "app-listing",
	templateUrl: "./listing.component.html",
	styleUrls: ["./listing.component.scss"]
})
export class ListingComponent implements OnInit {
	fetchResult?: SearchResultDto<any>;
	total: number = 0;
	pages: number = 0;

	isLoading: boolean = false;

	private _fetchData: () => Promise<SearchResultDto<any>> = async () => {
		return { data: [], total: 0, pages: 0 };
	};

	@Input() set fetchData(fetchData: () => Promise<SearchResultDto<any>>) {
		this._fetchData = fetchData;

		this.executeFetch();
	}

	@Input() dataPropertyToCard: DataPropToCard | undefined;

	constructor() {}

	ngOnInit(): void {}

	async executeFetch() {
		this.isLoading = true;

		this.fetchResult = await this._fetchData();

		this.isLoading = false;
	}
}

export type DataPropToCard = {
	title: string;
	description?: string;
	imageUrl: string;
	routerLink: string;
};
