import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';


const baseUrl = 'http://localhost:5000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http: HttpClient) { }

  fetchProducts() {
    return this.http.get(baseUrl)
  }

  addProduct(product: Product) {
    return this.http.post(baseUrl, product)
  }

  updateProduct(id: string, price: number) {
    return this.http.patch(baseUrl + id, { price })
  }

  deleteProduct(id: number) {
    return this.http.delete(baseUrl + id)
  }

}
