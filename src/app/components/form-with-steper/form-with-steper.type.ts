import {
	AbstractControlOptions,
	AsyncValidatorFn,
	FormControl,
	FormGroup,
	ValidatorFn
} from "@angular/forms";

export type FormWithStepper = {
	sectionTitle: string;
	formGroups: FormGroup[];
	sectionNumber: number;
};

export class FormTypedControl extends FormControl {
	fieldType: FieldType = "text";
	formAttributes?: FormAttribute[];

	constructor(
		fieldType: FieldType,
		formState?: any,
		validatorOrOpts?:
			| ValidatorFn
			| ValidatorFn[]
			| AbstractControlOptions
			| null
			| undefined,
		asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined,
		formAttributes?: FormAttribute[]
	) {
		super(formState, validatorOrOpts, asyncValidator);
		this.fieldType = fieldType;
		this.formAttributes = formAttributes;
	}
}

export type FieldType = "text" | "password" | "number";
export type FormAttribute = {
	[key: string]: any;
};
