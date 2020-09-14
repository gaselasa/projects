import { LineItem } from './../../../models/line-item';
import { CartService } from './../../../services/cart.service';
import { Product } from './../../../models/product';
import { MessageService } from './../../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartTotal:number

  cartItems=[]
  
  
  constructor(private messageMessage:MessageService,private cartservice:CartService) {

    this.loadCartItems();

   }

   loadCartItems(){
this.cartservice.getCartItem().subscribe((items:LineItem[])=>{
   
this.cartItems=items;




})

   }

  ngOnInit(): void {
    this.messageMessage.getMessage().subscribe((product:Product)=>{
      this.loadCartItems();
      this.calcTotal();


  

})
  }


calcTotal(){
  this.cartTotal=0;

    this.cartItems.forEach(item=>{
       this.cartTotal+=item.price*item.qty;
}






  


    )}
 

  

}
