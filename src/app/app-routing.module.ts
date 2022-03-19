import { NgModule } from '@angular/core'; 
// định nghĩa các đường dẫn
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';

import { StudentComponent } from './student/student.component';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : 'product',
    component : ProductComponent
  }, 
  {
    path : 'student',
    component : StudentComponent
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
