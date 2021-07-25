import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Company } from "../shared/types/company.type";

@Injectable({
	providedIn: "root"
})
export class CompanyService {
	endPoint = environment.apiUrl + "/v1/company";
	constructor(private httpClient: HttpClient) {}

	getByEmail(email: string): Observable<Company> {
		return this.httpClient.get<Company>(this.endPoint, {
			params: new HttpParams().append("email", email)
		});
	}
}
