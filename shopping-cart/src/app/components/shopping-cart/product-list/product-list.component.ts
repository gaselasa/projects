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




  constructor(private productService:ProductService) { 


  }

  ngOnInit(): void {
   this.productService.getProducts().subscribe((product:Product[])=>{
  console.log(product)

   this.products=product;


   });


  }

}
