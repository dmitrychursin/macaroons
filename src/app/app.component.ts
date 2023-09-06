import {Component, Input, OnInit} from '@angular/core';
import { PlusesType } from 'src/type/pluses.type';
import { ProductType } from 'src/type/product.type';
import { ProductService } from './services/product.service';
import { AdvantagesService } from './services/advantages.service';
import { CartService } from './services/cart.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MatDialog} from "@angular/material/dialog";
registerLocaleData(localeFr, 'fr');


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	linkPhone = "tel:+375(29)3689868";
	link = 'http://instagram.com/';

	phone = '375293689868';

	pluses: PlusesType[] = [];
	products: ProductType[] = [];

	scrollTo(target: HTMLElement): void {
		target.scrollIntoView({ behavior: "smooth" });
	}

	formValues = {
		productTitle: '',
		name: '',
		phone: '',
	}

	constructor(private productService: ProductService,
              private advantagesService: AdvantagesService,
              public cartServices: CartService) {
	}

	ngOnInit(): void {
		this.pluses = this.advantagesService.getAdvantages();
		this.products = this.productService.getProducts();
	}

	addToCart(title: string, target: HTMLElement): void {
		this.scrollTo(target);
		this.formValues.productTitle = title;
		this.cartServices.count++;

		alert(title + ' добавлен в корзину!');


	}

	createOrder() {
		if (!this.formValues.productTitle) {
			alert('Заполните пиццу');
			return;
		}
		if (!this.formValues.name) {
			alert('Заполните адрес');
			return;
		}
		if (!this.formValues.phone) {
			alert('Заполните телефон');
			return;
		}
		//ajax запрос
		//данные уходят на сервер
		alert('Спасибо за заказ');
		//очищаем форму
		this.formValues = {
			productTitle: '',
			name: '',
			phone: '',
		}
	}







}
