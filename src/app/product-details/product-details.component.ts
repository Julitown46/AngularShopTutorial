import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { ProductosService } from '../productos.service';
import { CartService } from '../cart.service';
import { Providers } from '../providers';
import { ProvidersService } from '../providers.service';
import { ObservableService } from '../observable.service';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: false
})
export class ProductDetailsComponent {

  provider: Providers | undefined;
  product: Product | undefined;
  products: Product[] = [];

  constructor (
     private route: ActivatedRoute,
    private cartService: CartService,
    private providerService: ProvidersService,
    private observableService: ObservableService,
    private productService: ProductosService
    ) {
      this.productService.getProducts1().subscribe(p => this.products = p);
    }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    this.productService.getProduct1(productIdFromRoute!).subscribe(p => this.product = p);

    this.providerService.getProviders().subscribe(providers => {
      this.provider = providers.find(p => p.id === this.product?.id);
    })
  
  }

  

  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Producto añadido al carro');
    this.observableService.sumarItem();
  }
}
