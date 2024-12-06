import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CardItemComponent } from './card-item/card-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-card',
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (cart of cartService.cart(); track cart.id) {
      <app-card-item [item]="cart" />
      }
      <app-order-summary />
    </div>
  `,
  imports: [CardItemComponent, OrderSummaryComponent],
})
export class CardComponent {
  cartService = inject(CartService);
}
