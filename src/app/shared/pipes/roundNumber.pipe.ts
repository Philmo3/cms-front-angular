import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "roundValue" })
export class RoundValue implements PipeTransform {
	transform(value: number): number {
		return Math.floor(value);
	}
}
