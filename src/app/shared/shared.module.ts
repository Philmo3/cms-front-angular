import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubTitleComponent } from "../components/sub-title/sub-title.component";
import { CountControl } from "./pipes/countCrontrol.pipe";
import { RoundValue } from "./pipes/roundNumber.pipe";

@NgModule({
	declarations: [SubTitleComponent, CountControl, RoundValue],
	imports: [CommonModule],
	exports: [CommonModule, SubTitleComponent, CountControl, RoundValue]
})
export class SharedModule {}
