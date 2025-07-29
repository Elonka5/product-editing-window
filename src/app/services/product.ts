import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Product {
  private productData = new BehaviorSubject<IProduct | null>(null);
  product$ = this.productData.asObservable();


  constructor(private http: HttpClient) {
    this.loadProduct();
  }

  loadProduct() {
    this.http.get<IProduct>('assets/data/product.json')
      .subscribe(product => this.productData.next(product));
  } 
}
