import { Company } from "../types/company.type";

export interface CompanyDto extends Company {
	_id: string;
}
