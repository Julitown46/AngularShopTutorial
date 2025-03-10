import { Component } from '@angular/core';
import { ObservableService } from '../observable.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    standalone: false
})
export class TopBarComponent {
    
    numCarrito: number = 0;

    constructor(private observableService: ObservableService){}

    ngOnInit(){
        this.observableService.curCarrito$.subscribe(num => this.numCarrito = num);
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/