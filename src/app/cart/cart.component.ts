import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { ObservableService } from '../observable.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: false
})
export class CartComponent {

  selectedShipping: number = 0;
  items = this.cartService.getItems();
  total= this.cartService.getTotalPrice();
  shippingPrices = this.cartService.getShippingPrices();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '' 
  });

  constructor (
    private cartService : CartService,
    private formBuilder : FormBuilder
  ){
  }

  onSubmit() : void  {
    this.items = this.cartService.clearCart();
    console.warn(' pedido enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  actualizarTotal(){
    this.total = this.cartService.getTotalPrice() + Number(this.selectedShipping);
  }
}
