import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs";

import { map, catchError } from "rxjs/operators";

import { Product, Item } from "../models/product.interface";

@Injectable()
export class InventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get("/api/cart")
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getProductItems(): Observable<Product[]> {
    return this.http
      .get("/api/products")
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
