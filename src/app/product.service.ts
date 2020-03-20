import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() {
    return [
      {
        id: 4387,
        name: 'Apple Watch - Series 5',
        brand: 'Apple',
        price: 700
      },
      {
        id: 4388,
        name: 'MacBook Pro - 13',
        brand: 'Apple',
        price: 4500
      },
      {
        id: 4284,
        name: 'Model S - P100D',
        brand: 'Tesla',
        price: 165000
      }
    ];
  }

  constructor() { }
}
