import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CompanyService } from "src/app/services/company.service";
import { UserService } from "src/app/services/user-service.service";
import { Company } from "../types/company.type";
import { User } from "../types/users.type";

export class AsyncEmailValidator {
	static userEmailValidator(userService: UserService) {
		return (control: AbstractControl): Observable<ValidationErrors | null> => {
			return userService
				.getByEmail(control.value)
				.pipe(map((user: User) => (user ? { invalidAsync: false } : null)));
		};
	}

	static companyEmailValidator(companyService: CompanyService) {
		return (control: AbstractControl): Observable<ValidationErrors | null> => {
			return companyService
				.getByEmail(control.value)
				.pipe(
					map((company: Company) => (company ? { invalidAsync: false } : null))
				);
		};
	}
}
