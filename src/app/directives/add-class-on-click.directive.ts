import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
	selector: "[ClassOnClick]"
})
export class AddClassOnClickDirective {
	@Input() classOnClick: string = "";

	private isActivate = false;

	constructor(private element: ElementRef) {
		console.log(this.element);
	}

	@HostListener("click")
	onClick() {
		this.isActivate = !this.isActivate;

		if (this.isActivate) {
			this.element.nativeElement.classList.add(this.classOnClick);
		} else {
			this.element.nativeElement.classList.remove(this.classOnClick);
		}
	}
}
