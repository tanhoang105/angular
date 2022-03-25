import { NgModule } from '@angular/core'; 
// định nghĩa các đường dẫn
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';

import { StudentComponent } from './student/student.component';

import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormEditComponent } from './product-form-edit/product-form-edit.component';



const routes: Routes = [
  {
    path : 'product',
    component : ProductComponent
  }, 
  {
    path : 'product/create',
    component : ProductFormEditComponent
  }, 
  {
    path : 'product/:id',
    component : ProductDetailComponent
  }, 
  {
    path : 'product/:id/edit',
    component : ProductFormEditComponent
  }, 
  
  
  {
    path : 'student',
    component : StudentComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
