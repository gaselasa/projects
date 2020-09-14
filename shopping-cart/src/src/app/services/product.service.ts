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

  product:Product
  
  constructor(private  http:HttpClient) { }

  getProductById(id:number):Observable<any>{

     return this.http.get<Product>(productUrl+'/'+id).pipe(
  map((result:any)=>{
   
      
     this.product=new Product(result)
      
     return this.product 
  })



     )
  }
  deleteProductById(productId:number):Observable<any>{

    return this.http.delete<Product>(productUrl+'/'+productId)


  }
  upDateProduct(product:Product,id:number):Observable<any>{

    return this.http.put<Product>(productUrl+'/'+id,product)



  }
  

  getProducts(): Observable<Product[]>{


    return this.http.get<Product[]>(productUrl).pipe(
    map((result:any[])=>{

      let productItem:Product[]=[];


      for(let item of result){

    

        productItem.push(new Product(item))
      
      }


      return productItem;
    })





    );

  }

  addProduct(product:Product):Observable<any>{

   
    return this.http.post(productUrl,product)


  }

}
