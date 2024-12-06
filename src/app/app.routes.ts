import { Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CardComponent,
    title: 'Cart',
  },
];
