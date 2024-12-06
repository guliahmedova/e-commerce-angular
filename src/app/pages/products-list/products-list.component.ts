import { Component, effect, signal } from '@angular/core';
import { Product } from '../../models/products.module';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <ul class="flex flex-wrap text-sm text-center my-2 mx-8">
      <li
        [class]="
          category() === CATEGORIES.jewelery
            ? 'text-blue-700 font-bold'
            : 'opacity-55'
        "
        class="me-2 cursor-pointer"
        (click)="category.set(CATEGORIES.jewelery)"
      >
        <span class="inline-block p-4 rounded-t-lg capitalize">{{
          CATEGORIES.jewelery
        }}</span>
      </li>

      <li
        [class]="
          category() === CATEGORIES.electronics
            ? 'text-blue-700 font-bold'
            : 'opacity-55'
        "
        class="me-2 cursor-pointer"
        (click)="category.set(CATEGORIES.electronics)"
      >
        <span class="inline-block p-4 rounded-t-lg capitalize">{{
          CATEGORIES.electronics
        }}</span>
      </li>

      <li
        [class]="
          category() === CATEGORIES.women
            ? 'text-blue-700 font-bold'
            : 'opacity-55'
        "
        class="me-2 cursor-pointer"
        (click)="category.set(CATEGORIES.women)"
      >
        <span class="inline-block p-4 rounded-t-lg capitalize">{{
          CATEGORIES.women
        }}</span>
      </li>

      <li
        class="me-2 cursor-pointer"
        (click)="category.set(CATEGORIES.men)"
        [class]="
          category() === CATEGORIES.men
            ? 'text-blue-700 font-bold'
            : 'opacity-55'
        "
      >
        <span class="inline-block p-4 rounded-t-lg capitalize">{{
          CATEGORIES.men
        }}</span>
      </li>
    </ul>
    <div class="p-8 grid grid-cols-2 gap-4 ">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
})
export class ProductsListComponent {
  CATEGORIES = {
    electronics: 'electronics',
    jewelery: 'jewelery',
    men: "men's clothing",
    women: "women's clothing",
  };

  category = signal(this.CATEGORIES.jewelery);
  products = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.fetchProductsByCategory(this.category());
    });
  }

  async fetchProductsByCategory(category: string) {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    this.products.set(data);
    this.category.set(category);
  }
}
