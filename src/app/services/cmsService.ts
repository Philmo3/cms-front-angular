import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SearchDto } from "../shared/dtos/search.dto";
import { SearchResultDto } from "../shared/dtos/searchResult.dto";

export class CmsService<responseType, searchDtoType extends SearchDto> {
	protected endPoint: string = environment.apiUrl;

	constructor(protected httpClient: HttpClient, endPointPart: string) {
		this.endPoint += endPointPart;
	}

	search(
		searchDto: searchDtoType,
		withCredentials = false
	): Observable<SearchResultDto<responseType>> {
		return this.httpClient.get<SearchResultDto<responseType>>(this.endPoint, {
			params: this.buildParams(searchDto),
			withCredentials
		});
	}

	private buildParams(searchDto: searchDtoType): HttpParams {
		const httpParams: HttpParams = new HttpParams();

		for (const key in searchDto) {
			if (Array.isArray(searchDto[key])) {
				for (const arrayKey in searchDto[key]) {
					this.appendParam(
						httpParams,
						arrayKey,
						searchDto[key][arrayKey] as unknown as string
					);
				}
			} else {
				this.appendParam(httpParams, key, searchDto[key] as unknown as string);
			}
		}

		return httpParams;
	}

	private appendParam(httpParam: HttpParams, name: string, value: string) {
		httpParam.append(name, value);
	}
}
