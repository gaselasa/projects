import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/adm/add/add.component';
import { DeleteComponent } from './components/adm/delete/delete.component';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UpdateComponent } from './components/adm/update/update.component';

const routes: Routes = [
  {path:'home', component:ShoppingCartComponent},
  {path:'add', component:AddComponent},
  {path:'delete', component: DeleteComponent},
  {path:'edit', component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
