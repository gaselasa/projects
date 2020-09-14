import { Product2 } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Product } from 'src/app/models/product';
import { phoneNumberValidator } from 'src/app/validators/phone-validator';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

c:number
product:Product2

status:string="Search the product By its ID"
  searchForm:FormGroup
  constructor(private productService:ProductService) { 
      this.searchForm=this.createFormSearch();}

  ngOnInit(): void {this.product=new Product2()
    this.c=0
  }

  createFormSearch(){

    return new FormGroup({
      searchId:new FormControl("",[Validators.required,phoneNumberValidator])

    })
  }
  onSearch(){

    this.productService.getProductById(this.searchForm.get('searchId').value).subscribe((product:Product)=>{
         if(product===undefined){
        this.status="no product with this"+this.searchForm.get('searchId');
       this.resertForm();

         }else{
        this.product=product;
         }
this.c++
    })

}
onDeleteProduct(){

this.productService.deleteProductById(this.searchForm.get('searchId').value).subscribe((product)=>{





})
this.c=0
this.status="Product Deleted"
this.resertForm()


}
resertForm(){
  this.searchForm.reset();
}
  
 

}
