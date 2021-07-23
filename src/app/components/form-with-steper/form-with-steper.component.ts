import { Component, Input, OnInit } from "@angular/core";
import { FormWithStepper } from "./form-with-steper.type";

@Component({
	selector: "app-form-with-steper",
	templateUrl: "./form-with-steper.component.html",
	styleUrls: ["./form-with-steper.component.scss"]
})
export class FormWithSteperComponent implements OnInit {
	@Input() formSteppers: FormWithStepper[] = [];

	@Input() showFinishStep: boolean = true;

	currentSteps = 0;

	constructor() {}

	ngOnInit(): void {}

	next(): void {
		if (this.currentSectionFormIsValid()) {
			this.currentSteps += 1;
		}
	}

	previous(): void {
		if (this.currentSteps > 0) {
			this.currentSteps -= 1;
		}
	}

	trackBySectionNumber(index: number, form: FormWithStepper): number {
		return form.sectionNumber;
	}

	private currentSectionFormIsValid(): boolean {
		const currentForm = this.formSteppers[this.currentSteps].formGroups;
		let isValid = true;
		console.log(currentForm);
		for (
			let formIndex = 0;
			formIndex < currentForm.length && isValid;
			formIndex++
		) {
			isValid = currentForm[formIndex].valid;
		}

		return isValid;
	}
}
