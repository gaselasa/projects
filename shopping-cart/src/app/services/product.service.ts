import { Product } from 'src/app/models/product';
import { productUrl } from './../config/api';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LineItem } from '../models/line-item';

//const apiUrl='http://localhost:3000/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  
  constructor(private  http:HttpClient) { }

  getProducts(): Observable<Product[]>{


    return this.http.get<Product[]>(productUrl).pipe(
    map((result:any[])=>{

      let productItem:Product[]=[];


      for(let item of result){

    

        productItem.push(new Product(item.product))
          /*new Product(item.product.id,item.product.name,item.product.description,item.product.price,
          item.product.imageUrl))*/

      }


      return productItem;
    })





    );

  }

  addProduct(product):Observable<any>{

    console.log(product)
    return this.http.post(productUrl,{product})


  }

}
