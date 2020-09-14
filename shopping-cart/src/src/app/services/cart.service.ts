import { Product } from 'src/app/models/product';
import { cartUrl } from './../config/api';
import { LineItem } from './../models/line-item';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  addProductToCart(product:Product):Observable<any>{

    return this.http.post(cartUrl,{product})


  }

  deleteITems(productId:number):Observable<Product>{
      
      console.log("id",productId)
    return this.http.delete<Product>(cartUrl+'/'+productId)

  }

  getCartItem():Observable<LineItem[]>{

    return this.http.get<LineItem[]>(cartUrl).pipe(
map((result:any[])=>{
let cartItem:LineItem[]=[]


for(let item of result){


  let exist=false;

   for(let i in cartItem){
    if(cartItem[i].productId===item.product.id)
         {
            cartItem[i].qty++
       exist=true;
break;
}

  }
  if(!exist){
    cartItem.push(new LineItem(item.id,item.product))
  }
  
}

return cartItem;


})




    )




  }
 

}

