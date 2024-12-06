import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Product } from '../../../models/products.module';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-card-item',
  template: `
    <div
      class="bg-white shadow-md rounded-xl border p-6 flex gap4 items-center gap-4"
    >
      <img [src]="item().image" alt="" class="size-12 object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm">{{ '$' + item().price }}</span>
        <p class="text-slate-400 my-2">{{ item().description }}</p>
      </div>
      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(item().id)"
      />
    </div>
  `,
  imports: [ButtonComponent],
})
export class CardItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
