import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubTitleComponent } from "../components/sub-title/sub-title.component";
import { CountControl } from "./pipes/countCrontrol.pipe";
import { RoundValue } from "./pipes/roundNumber.pipe";
import { AddClassOnClickDirective } from "../directives/add-class-on-click.directive";
import { ImageFallBAckDirective } from "../directives/image-fall-back.directive";

@NgModule({
	declarations: [
		SubTitleComponent,
		CountControl,
		RoundValue,
		AddClassOnClickDirective,
		ImageFallBAckDirective
	],
	imports: [CommonModule],
	exports: [
		CommonModule,
		SubTitleComponent,
		CountControl,
		RoundValue,
		AddClassOnClickDirective,
		ImageFallBAckDirective
	]
})
export class SharedModule {}
