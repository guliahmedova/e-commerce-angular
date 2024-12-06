import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.module';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  constructor() {}

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart()?.filter((p) => p.id !== id));
  }
}
