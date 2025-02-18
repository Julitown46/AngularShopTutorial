import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { ObservableService } from './observable.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items : {product: Product, cantidad: number}[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart( product: Product) {
    const existe = this.items.find(p => p.product.id === product.id);

    if (existe) {
      existe.cantidad++;
    } else {
      this.items.push({product, cantidad: 1});
    }
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
    return this.items.reduce((acc, item) => acc + item.product.price, 0);
  }

}
