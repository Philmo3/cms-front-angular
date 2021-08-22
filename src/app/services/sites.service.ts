import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchSiteDto } from "../shared/dtos/searchSite.dto";
import { Site } from "../shared/types/site.type";
import { CmsService } from "./cmsService";

@Injectable({
	providedIn: "root"
})
export class SitesService extends CmsService<Site, SearchSiteDto> {
	constructor(protected httpClient: HttpClient) {
		super(httpClient, "/v1/sites");
	}
}
