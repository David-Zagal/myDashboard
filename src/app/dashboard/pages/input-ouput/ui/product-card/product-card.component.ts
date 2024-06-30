import { CommonModule } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';

import { Product } from '@interfaces/product.interface';

@Component({
	selector: 'ui-product-card',
	standalone: true,
	imports: [ CommonModule ],
	templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

	// @Input({ required: true }) product!: Product;
	public product = input.required <Product> ();

	// @Output()
	// public onIncrementQuantity = new EventEmitter<number> ();
	public onIncrementQuantity = output <number> ();

	public incrementQuantity (): void {
		this.onIncrementQuantity.emit (this.product ().quantity +1);
	}

	public loginEffect = effect (() => {
		console.log (this.product ().name);
	});
}