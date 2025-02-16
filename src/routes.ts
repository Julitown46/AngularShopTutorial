import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./app/product-details/product-details.component";
import { ProductListComponent } from "./app/product-list/product-list.component";
import { ProvidersComponent } from "./app/providers/providers.component";
import { ProvidersDetailsComponent} from "./app/providers-details/providers-details.component";

const routeConfig: Routes = [
    {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
    },
    {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
    },
    {
        path: 'providers',
        component: ProvidersComponent,
        title: 'Providers'
    },
    {
        path: 'providers/:providerId',
        component: ProvidersDetailsComponent,
        title: 'Providers details'
    }
];
    
    export default routeConfig;