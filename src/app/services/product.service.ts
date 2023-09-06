import { Injectable } from '@angular/core';
import { ProductType } from 'src/type/product.type';

@Injectable()
export class ProductService {

	constructor() { }

	getProducts(): ProductType[] {
		return [
			{
				image: '1.png',
				title: 'Макарун с малиной',
				pieces: '1 шт.',
				price: 1.70
			},
			{
				image: '2.png',
				title: 'Макарун с манго',
				pieces: '1 шт.',
				price: 1.70
			},
			{
				image: '3.png',
				title: 'Пирог с ванилью',
				pieces: '1 шт.',
				price: 1.70
			},
			{
				image: '4.png',
				title: 'Пирог с фисташками',
				pieces: '1 шт.',
				price: 1.70
			},
		];
	}
}






