import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
	selector: "[imageFallBack]"
})
export class ImageFallBAckDirective {
	@Input() fallBackSource: string = "";

	constructor(private element: ElementRef) {}

	@HostListener("error")
	fallBack() {
		this.element.nativeElement.src = this.fallBackSource;
	}
}
