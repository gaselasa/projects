import { Product } from './product';
export class LineItem {
    public productName:string
    public price:number
    public qty:number
    public productId:number
  public description:string

    constructor(id:number,product:Product,qty=1){

        this.price=product.price;
        this.qty=qty;
        this.productName=product.name;
        this.productId=product.id;
        this.description=product.description



    }
}
