import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CompanyDto } from "../shared/dtos/company.dto";
import { Company } from "../shared/types/company.type";

@Injectable({
	providedIn: "root"
})
export class CompanyService {
	endPoint = environment.apiUrl + "/v1/company";
	constructor(private httpClient: HttpClient) {}

	create(companyDto: CompanyDto): Observable<Company> {
		return this.httpClient.post<Company>(this.endPoint, companyDto);
	}

	getByEmail(email: string): Observable<Company> {
		return this.httpClient.get<Company>(this.endPoint + "/by-email", {
			params: new HttpParams().append("email", email)
		});
	}
}
