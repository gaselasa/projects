import { MessageService } from './../../../../services/message.service';
import { LineItem } from './../../../../models/line-item';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

@Input()

cartItemArray:LineItem

public deleteProduct(){


  
  this.cartservice.deleteITems(this.cartItemArray.id).subscribe((lineitem)=>{

    this.message.sendMessage(lineitem)
  

  })
  



}


  constructor(private cartservice:CartService,private message: MessageService) { }

  ngOnInit(): void {
  }

}
