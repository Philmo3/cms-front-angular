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

export class FormTypedControl<DataType = any> extends FormControl {
	fieldType: FieldType = "text";
	formAttributes: FormAttribute = {};
	errorTip: string | undefined;
	data: DataType[] | undefined;

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
		formAttributes: FormAttribute = {},
		errorTip?: string,
		data?: DataType[]
	) {
		super(formState, validatorOrOpts, asyncValidator);
		this.fieldType = fieldType;
		this.formAttributes = formAttributes;
		this.errorTip = errorTip;
		this.data = data;
	}

	setData(data: DataType[]) {
		this.data = data;
	}
}

export type FieldType = "text" | "password" | "number" | "dropDown";
export type FormAttribute = {
	[key: string]: any;
};

export type DropDownDataType = { label: string; value: any };
