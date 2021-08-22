export interface SearchResultDto<dataType> {
	data: dataType[];
	total?: number;
	pages?: number;
}
