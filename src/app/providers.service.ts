import { Injectable } from '@angular/core';
import { Providers } from './providers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

    providers: Providers[] = [];
    private url = 'assets/providers.json';

    constructor(private http: HttpClient) { }
    
    getProviders() {
        return this.http.get<Providers[]>(this.url);
    }

}