import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
    carrito: number = 0;
    total: number = 0;

    private numCarrito = new BehaviorSubject<number>(this.carrito);
    curCarrito$ = this.numCarrito.asObservable();

    constructor(){

    }

    sumarItem(){
        this.numCarrito.next(this.numCarrito.value + 1);
    }
}