import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { Providers } from '../providers';
import { ProvidersService } from '../providers.service';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: false
})
export class ProductDetailsComponent {

  provider: Providers | undefined;
  product: Product | undefined;
  constructor (
     private route: ActivatedRoute,
    private cartService: CartService,
    private providerService: ProvidersService
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);

    this.providerService.getProviders().subscribe(providers => {
      this.provider = providers.find(p => p.id === this.product?.id);
    })
  
  }

  

  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Producto añadido al carro');
  }
}
