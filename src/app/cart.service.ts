import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { ObservableService } from './observable.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items : Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart( product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json')
  }

  getTotalPrice(){
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

}
