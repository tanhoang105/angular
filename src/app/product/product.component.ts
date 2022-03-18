import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // start working
  product = [
    {
      id:0,
      name: "SamSung",
      price : 12000000,
      desc : 'mô tả ngắn'
    },
    {
      id:1,
      name: "SamSung 1",
      price : 12000000,
      desc : 'mô tả ngắn'
    }
  ];


  productShow = this.product;

  newProduct = {
    id : 0,
    name : '',
    price : 0,
    desc : ''
  };

  onSubmit(product:any){
      console.log(this.newProduct)
      this.onValidate(this.newProduct)
      if(this.newProduct.id){
          // nếu mà tồn tại thì nghĩa là chỉnh sửa
         for (let index = 0; index < product.length; index++) {
            if(this.product[index].id === this.newProduct.id){
                this.product[index] = this.newProduct
            }
           
         }
      }else{
        // nghĩa là thêm mới 
        this.newProduct = {
          ...this.newProduct,
          id : this.product.length,

        }
        this.product.push(this.newProduct);
      }

      this.newProduct = {
        id : 0,
        name : '',
        price : 0,
        desc : ''
      };


  }

  remove(id:number){
    this.productShow = this.productShow.filter(e => e.id !== id)
  }

  onValidate(o :any){
    if(!o.name || !o.price || !o.desc){
      return false;
    }
    return true;
  }


  edit(product:any){
    console.log(product);
    this.newProduct = product;
  }


}
