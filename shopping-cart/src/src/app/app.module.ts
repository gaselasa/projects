import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule} from '@angular/common/http'
import{ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemsComponent } from './components/shopping-cart/cart/cart-items/cart-items.component';
import { ProductListItemComponent } from './components/shopping-cart/product-list/product-list-item/product-list-item.component';
import { AddComponent } from './components/adm/add/add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './components/adm/delete/delete.component';
import { UpdateComponent } from './components/adm/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemsComponent,
    ProductListItemComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

   



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
