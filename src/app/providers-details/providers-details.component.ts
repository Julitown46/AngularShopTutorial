import { Component } from '@angular/core';
import { Providers } from '../providers';
import { ProvidersService } from '../providers.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../products';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-providers-details',
  imports: [RouterLink],
  templateUrl: './providers-details.component.html',
  styleUrl: './providers-details.component.css'
})
export class ProvidersDetailsComponent {
  provider: Providers | undefined;
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private ProviderService: ProvidersService, private productService: ProductosService){
    this.productService.getProducts1().subscribe(p => this.products = p);
  }

  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    this.ProviderService.getProviders().subscribe(providers => {
      this.provider = providers.find(p => p.id === providerIdFromRoute);
    });

    this.products = this.products.filter(p => p.providerId === providerIdFromRoute);
  }

}
