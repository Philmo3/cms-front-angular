import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { DataPropToCard } from "../listing.component";

@Component({
	selector: "app-listing-card",
	templateUrl: "./listing-card.component.html",
	styleUrls: ["./listing-card.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ListingCardComponent implements OnInit {
	@Input() dataPropertyToCard?: DataPropToCard;

	@Input() data: any;

	constructor() {}

	ngOnInit(): void {}
}
