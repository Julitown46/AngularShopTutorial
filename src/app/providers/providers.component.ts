import { Component } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { Providers } from '../providers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-providers',
  imports: [CommonModule, RouterLink],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {

providers: Providers[] = [];

constructor(private providersService: ProvidersService) {
 }

 ngOnInit(): void {
  this.providersService.getProviders().subscribe((providersList) => {
    this.providers = providersList;
  });
  console.log('ProvidersComponent initialized');
 }
}
