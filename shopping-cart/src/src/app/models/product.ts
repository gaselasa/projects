//import { Product } from 'src/app/models/product';
export class Product2{
 
    constructor(){

    }
public id:number
    public name:string
    public description:string=''
    public price:number=0
public imageUrl:string="https://www.istore.co.za/media/catalog/product/cache/1/image/1600x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphonexr_black_front_q418_screen_1.jpg"
}


export class Product {
    public id:number
    public name:string
    public description:string=''
    public price:number=0
    constructor( product?:Product){
     this.price=product.price
     this.name=product.name
     this.id=product.id
     this.description=product.description;

     this.imageUrl=product.imageUrl
    }

 public imageUrl:string="https://www.istore.co.za/media/catalog/product/cache/1/image/1600x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphonexr_black_front_q418_screen_1.jpg"

    public getId():number{


        return this.id;

    }

    public getName():string{

        return this.name;
    }
}
