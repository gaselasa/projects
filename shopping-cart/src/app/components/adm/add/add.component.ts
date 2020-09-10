import { MessageService } from './../../../services/message.service';
import { Product2 } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 
   p:Product2=new Product2()

   

  constructor(private productservice:ProductService,private messageService:MessageService) { }

  ngOnInit(): void {
  }
  public onClick(data:any){

   this.p.name=data.name
   this.p.id=data.id
   
 this.p.description=data.description
 this.p.price=data.price
    console.log(data.description+"this is description")
  this.productservice.addProduct(this.p).subscribe((product)=>{
    this.messageService.sendMessage(product)



   })


    
  


  }

}
