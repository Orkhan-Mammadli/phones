import { Injectable } from '@angular/core';
import { Product } from '../Model/product';
import { ProductData } from '../product-data';
import { Category } from '../Model/sidebar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  status: Subject<Product[]> = new Subject<Product[]>();

  products: Product[]
  allProducts: Product[]
  
  constructor() {
    // this.allProducts = ProductData
    this.products = ProductData
  }

  updateStatus() {
    this.status.next(this.products)
  }

  getProductById(id: number) {
    this.products = ProductData.filter(p =>p.catId == id)
  }


}
