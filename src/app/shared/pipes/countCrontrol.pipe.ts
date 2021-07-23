import { Pipe, PipeTransform } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Pipe({ name: "countControl" })
export class CountControl implements PipeTransform {
	transform(formGroup: FormGroup): number {
		return Object.keys(formGroup.controls).length;
	}
}
