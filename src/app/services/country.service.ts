import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CountryService {
	constructor(private httpClient: HttpClient) {}

	getAllCountries(): Observable<Country[]> {
		return this.httpClient.get<Country[]>(
			"https://restcountries.eu/rest/v2/all"
		);
	}
}

interface Country {
	name: string;
}
