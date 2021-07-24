import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormTypedControl } from "src/app/shared/types/form-with-steper.type";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "app-form-input-factory",
	templateUrl: "./form-input-factory.component.html",
	styleUrls: ["./form-input-factory.component.scss"]
})
export class FormInputFactoryComponent implements OnInit {
	group: FormGroup | undefined = undefined;
	@Input() set formGroup(formGroup: FormGroup) {
		this.setControls(formGroup.controls);
		this.group = formGroup;
	}

	@Input() inputExtraClass: string = "";

	controls: { control: FormTypedControl; name: string }[] = [];

	constructor() {}

	ngOnInit(): void {}

	private setControls(formTypedControl: any) {
		for (const key in formTypedControl) {
			this.controls.push({
				control: formTypedControl[key] as FormTypedControl,
				name: key
			});
		}
		console.log(this.controls);
	}
}
