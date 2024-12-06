import { Component, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { Product } from '../../../models/products.module';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative "
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          [alt]="product().title"
          class="w-52 h-24 object-contain"
        />
      </div>

      <div class="flex flex-col mt-2">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm">{{ '$' + product().price }}</span>
        <p class="text-slate-400 my-2 w-11/12 text-ellipsis">
          {{ product().description }}
        </p>
        <app-primary-button
          label="Add to Cart"
          class="mt-3"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>

      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().rating.count ? 'text-green-500' : 'text-red-500'"
      >
        @if (product().rating.count) {
        {{ product().rating.count }} left } @else { Out of stock }
      </span>
    </div>
  `,
  imports: [PrimaryButtonComponent],
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
