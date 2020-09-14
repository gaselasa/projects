import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject=new Subject();

sendMessage(product:Product){

  this.subject.next(product);

}
getMessage(){

  return this.subject.asObservable()
}

  constructor() {


   }
}
