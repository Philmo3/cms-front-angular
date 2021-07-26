import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { FormWithStepper } from "../../shared/types/form-with-steper.type";

@Component({
	selector: "app-form-with-steper",
	templateUrl: "./form-with-steper.component.html",
	styleUrls: ["./form-with-steper.component.scss"]
})
export class FormWithSteperComponent implements OnInit, AfterViewInit {
	@Input() formSteppers: FormWithStepper[] = [];

	@Input() showFinishStep: boolean = true;

	@Input() formExtraClass: string = "";

	@Input() sectionExtraClass: string = "";

	@Input() inputExtraClass: string = "";

	@Input() onFinish?: () => Promise<void>;

	currentSteps = 0;

	totalStep = 0;

	constructor() {}

	ngAfterViewInit(): void {
		this.setTotalStep();
	}

	ngOnInit(): void {}

	async next(): Promise<void> {
		if (this.currentSectionFormIsValid()) {
			this.currentSteps += 1;
		}
		if (this.onFinish) {
			await this.onFinish();
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
		const currentForm = this.formSteppers.find(
			formStepper => formStepper.sectionNumber === this.currentSteps
		)?.formGroups;
		let isValid = true;

		if (currentForm) {
			for (
				let formIndex = 0;
				formIndex < currentForm!.length && isValid;
				formIndex++
			) {
				isValid = currentForm![formIndex].valid;
			}

			if (!isValid) {
				currentForm!.forEach(group => {
					for (const i in group.controls) {
						if (group.controls.hasOwnProperty(i)) {
							group.controls[i].markAsDirty();
							group.controls[i].updateValueAndValidity();
						}
					}
				});
			}
		}

		return isValid;
	}

	private setTotalStep() {
		this.totalStep = this.formSteppers.length;
	}
}
