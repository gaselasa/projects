import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './../../../services/message.service';

import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import {phoneNumberValidator} from 'src/app/validators/phone-validator'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 
   
  productForm:FormGroup
   

  constructor(private productservice:ProductService,private messageService:MessageService) {

   this.productForm=this.createFormAdd();


   }

  ngOnInit(): void {
  }

 onAddProduct(){

  const result:Product=Object.assign({},this.productForm.value)
  


  this.productservice.addProduct(result).subscribe((product:Product)=>{
 
     
      this.messageService.sendMessage(product)
     this.productForm.reset();

  })

 }

 createFormAdd(){

  return new FormGroup({

    id:new FormControl("",[Validators.required,phoneNumberValidator]),
    name:new FormControl("",[Validators.required]),
   
    
    price:new FormControl("",[Validators.required,phoneNumberValidator]),
    
    description:new FormControl("",[Validators.required]),
  //  imageUrl:new FormControl("",[Validators.required])
  })
}






  

}
