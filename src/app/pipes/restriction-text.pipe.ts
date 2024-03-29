import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'restrictionText'
})
export class RestrictionTextPipe implements PipeTransform {

	transform(value: string, limit = 95, completeWords = false, ellipsis = '...') {
		if (completeWords) {
			limit = value.substr(0, limit).lastIndexOf(' ');
		}
		return value.length > limit ? value.substr(0, limit) + ellipsis : value;
	}

}


