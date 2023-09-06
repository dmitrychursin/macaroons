import { Component, Input } from '@angular/core';
import { PlusesType } from 'src/type/pluses.type';

@Component({
	selector: 'advantages',
	templateUrl: './advantages.component.html',
	styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {

	@Input() pluses: PlusesType;
	@Input() index: number = 0;

	constructor() {

		this.pluses = {
			title: '',
			description: ''
		}
	}

}
