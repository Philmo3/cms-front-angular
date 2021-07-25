import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EqualFieldValidator {
	static validator(fielNameToEqual: string) {
		return (control: AbstractControl): ValidationErrors | null => {
			const fieldToEqual = control.parent?.get(fielNameToEqual);

			return fieldToEqual && fieldToEqual.value === control.value
				? null
				: { valid: false };
		};
	}
}
