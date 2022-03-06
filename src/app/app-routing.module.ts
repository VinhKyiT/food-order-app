import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchItem', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'detail/:id', component: FoodDetailComponent},
  {path: 'cart', component: CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
