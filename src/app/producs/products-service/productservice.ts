import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Productservice {

  private readonly baseUrl = environment.apiUrl;


  constructor(public http:HttpClient) {

  }

  GetAllProducts() {
  return this.http.get(`${this.baseUrl}/products`);
 }

    getProductById(productId: string) {
    return this.http.get(`${this.baseUrl}/products/${productId}`);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.baseUrl}/products/${productId}`)
  }

addProduct(product: any) {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  editProduct(productId: string, product: any) {
    return this.http.patch(`${this.baseUrl}/products/${productId}`, product);
  }

}
