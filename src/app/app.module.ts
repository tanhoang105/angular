import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// cho app.component to
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormEditComponent } from './product-form-edit/product-form-edit.component';
// call Api
import { ProductService } from './service/product.service';
// cấu hình các module 
import { HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './layOut2/header/header.component';
import { AsideComponent } from './layOut2/aside/aside.component';
import { FooterComponent } from './layOut2/footer/footer.component';
// import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    StudentComponent,
    ProductDetailComponent,
    ProductFormEditComponent,
    
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    
  
  ],
  imports: [
    // giúp khi chuyển trang sẽ ko bị reload
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // cho tất cả các component có thể sử dụng được
    FormsModule,
    HttpClientModule,
  ],
  // định nghĩa các service 
  providers: [ProductService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
