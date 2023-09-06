import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProductService } from 'src/app/services/cart-product.service';
import { ProductType } from 'src/type/product.type';

@Component({
	selector: 'product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

	@Input() product: ProductType;
	@Output() addToCartEvent: EventEmitter<Event> = new EventEmitter<Event>;

	constructor(public cartProductService: CartProductService) {
		this.product = {
			image: '',
			title: '',
			pieces: '',
			price: 0
		}
	}

	addProductToCart() {
		this.cartProductService.count += this.product.price
		this.addToCartEvent.emit();
	}

}
