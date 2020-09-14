import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from 'src/app/validators/phone-validator';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  searchForm:FormGroup
  productForm:FormGroup
  
  constructor(private productService:ProductService) {

    this.searchForm=this.createFormEdit();
    this.productForm=this.createFormAdd()
   }

  ngOnInit(): void {
  }
  onSearch(){

    this.productService.getProductById(this.searchForm.get('searchId').value).subscribe((product:Product)=>{

      

      this.productForm.setValue(product)

    })

     



}

reset(){

 

}

onSaveProduct(){

  const result:Product=Object.assign({},this.productForm.value)

this.productService.upDateProduct(result,this.searchForm.get('searchId').value).subscribe((result:any)=>{

  console.log(result);

})

this.productForm.reset()
this.searchForm.reset();




}


createFormAdd(){

  return new FormGroup({

    id:new FormControl("",[Validators.required,phoneNumberValidator]),
    name:new FormControl("",[Validators.required]),
   
    
    price:new FormControl("",[Validators.required,phoneNumberValidator]),
    
    description:new FormControl("",[Validators.required]),
    imageUrl:new FormControl("",[Validators.required])
  })
}

  createFormEdit(){

    return new FormGroup({
      searchId:new FormControl("",[Validators.required,phoneNumberValidator])

    })
  }


}
