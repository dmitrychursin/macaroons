import { Component } from '@angular/core';
import { CartProductService } from 'src/app/services/cart-product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss']
})


export class BasketComponent {

	showPresent: boolean = true;

	constructor(public cartServices: CartService, public cartProductService: CartProductService) {
	}

}



