import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Price } from './price';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
    }

    public addProduct(product: Product): Observable<Product>{
        return this.http.post<Product>(`${this.apiServerUrl}/product`, product);
    }

    public updateProduct(product: Product): Observable<Product>{
        return this.http.put<Product>(`${this.apiServerUrl}/product/update`, product);
    }

    public deleteProduct(productID: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/product/${productID}`);
    }

    public addPrice(productID: number, price: Price): Observable<Product>{
        return this.http.post<Product>(`${this.apiServerUrl}/product/addPrice/${productID}`, price);
    }
}