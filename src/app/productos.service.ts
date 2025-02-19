import { Injectable } from '@angular/core';
import { Product } from './products';
import { Product2 } from './product2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    productos: Product[] = [];
    private url1 = 'http://localhost:3001/products1';
    private url2 = 'http://localhost:3002/products2'

    constructor(private http: HttpClient) { }
    
    getProducts1() {
        return this.http.get<Product[]>(this.url1);
    }

    getProducts2() {
        return this.http.get<Product2[]>(this.url2);
    }

    getProduct1(id: string){
        return this.http.get<Product>(`${this.url1}/${id}`);
    }

    getProduct2(id: string){
        return this.http.get<Product2>(`${this.url2}/${id}`);
    }
}