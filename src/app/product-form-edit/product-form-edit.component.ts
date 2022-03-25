import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-form-edit',
  templateUrl: './product-form-edit.component.html',
  styleUrls: ['./product-form-edit.component.css']
})
export class ProductFormEditComponent implements OnInit {
  // định nghĩa ra biến để nhận giá trị từ API trả về
  productDetail: any;
  id : any;
  //  hàm được chạy khi có đối tượng được tạo từ lớp 
  constructor(
    private ps:ProductService,
    private route: ActivatedRoute, // để lấy ra id trên url
    //  sử dụng để điều hướng
    private router: Router
  ) { }

  // hàm nàu được chạy sau khi view được render 
  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id'];
    // nếu có id thì mới call API để hiển thị dữ liệu
    if(this.id !== undefined){
      this.ps.getProduct(this.id).subscribe(data=> {
        // gán giá trị của biến đã được định nghĩa từ ban đầu 
        this.productDetail = data ; 
        console.log(this.productDetail);
      })

    }else{
      this.productDetail = {
        name : '',
        desc : '',
        price : 0,
      }
    }

  }


  onSubmit(o:any){
    console.log(o);
    if(o.id !== undefined){
      this.ps.upDateProduct(this.id , o).subscribe();
      this.router.navigate(['/product']);
    }else{
      this.ps.createProduct(o).subscribe();
      this.router.navigate(['/product']);

    }
  }



  
}
