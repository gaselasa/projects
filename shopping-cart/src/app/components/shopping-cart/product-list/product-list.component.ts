import { MessageService } from './../../../services/message.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products :Product[]=[];




  constructor(private productService:ProductService,private messageService:MessageService) { 
    this.callGetProduct();

  }

  ngOnInit(): void {
   
    this.messageService.getMessage().subscribe(()=>{
      this.callGetProduct();
    })
  



  }
  callGetProduct(){
    this.productService.getProducts().subscribe((product:Product[])=>{


      this.products=product;
   
   
      });

  }

}
