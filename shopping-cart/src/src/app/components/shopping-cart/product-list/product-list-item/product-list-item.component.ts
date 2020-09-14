import { CartService } from './../../../../services/cart.service';
import { MessageService } from './../../../../services/message.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {


  @Input()
  productItem:Product;
  
  constructor(private messageService:MessageService,private cartservice:CartService) { }

  onAddToCart(){

    this.cartservice.addProductToCart(this.productItem).subscribe(()=>{
      this.messageService.sendMessage(this.productItem);

    })


  }

  ngOnInit(): void {
  }

}
