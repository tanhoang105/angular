import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// đường đẫn api
const apiUrl = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // định nghĩa 1 biến http để kết nối với api
  constructor( private http : HttpClient) { }
  
  // định nghĩa phương thức 
  // api thường có bất đồng bộ 
  // để xử lý thì chúng ta sử dụng subscribe
  getProducts() : Observable <any>{

    return this.http.get(apiUrl)
  }


  getProduct(id : number|string) : Observable<any>{

    return this.http.get(`${apiUrl}/${id}`)

  }

  createProduct(data:any):Observable<any>{
    return this.http.post(apiUrl,data);
  }

  upDateProduct(id:number|string,data:any):Observable<any>{
    return this.http.put(`${apiUrl}/${id}` , data);

  }

  deleteProduct(id:number|string){
    return this.http.delete(`${apiUrl}/${id}`);
  }


}
