import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Product } from '../products';
import { Product2 } from '../product2';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent {
  products: Product[] = [];
  products2: Product2[] = [];


  constructor(private productService: ProductosService){
    this.productService.getProducts1().subscribe(p => this.products = p);
    this.productService.getProducts2().subscribe(p => this.products2 = p);
  }

  share() {
    window.alert('Esto es un window.alert emergente que se activa con la funcion share()!');
  }

  onNotify() {
    window.alert('Te avisa cuando este de oferta, esto es una lert de onNotify()');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/