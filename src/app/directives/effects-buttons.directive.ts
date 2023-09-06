import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[effectsButtons]'
})
export class EffectsButtonsDirective implements OnInit {

	@Input() buttonDefaultBgColor: string = "rgb(215, 72, 92)";
	@Input() buttonHoverBgColor: string = "rgb(113, 8, 30)";

	constructor() { }

	private _backgroundColor: string = "";
	@HostBinding('style.backgroundColor')
	get getIsOnHover() {
		return this._backgroundColor;
	}

	private _isOnHover: boolean = false;
	@HostBinding('class.isOnHover')
	get getBgColor() {
		return this._isOnHover;
	}

	@HostListener('mouseenter')
	onHover() {
		this.hoverElementBgColor(this.buttonHoverBgColor);
		this._isOnHover = true;
	}

	@HostListener('mouseleave')
	onNoHover() {
		this.hoverElementBgColor(this.buttonDefaultBgColor);
		this._isOnHover = false;
	}

	ngOnInit() {
		this.hoverElementBgColor(this.buttonDefaultBgColor);
	}

	hoverElementBgColor(color: string) {
		this._backgroundColor = color;
	}

}
