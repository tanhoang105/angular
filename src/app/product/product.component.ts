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
      id:1,
      name: "SamSung",
      price : 12000000,
      desc : 'mô tả ngắn'
    },
    {
      id:2,
      name: "SamSung 1",
      price : 12000000,
      desc : 'mô tả ngắn'
    }
  ];


  // productShow = this.product;

  newProduct = {
    id : 0,
    name : '',
    price : 0,
    desc : ''
  };

  onSubmit(data:any){
      console.log(data);
      console.log(this.newProduct)
      if(!this.onValidate(this.newProduct)){
        return;
      }
      if(this.newProduct.id){
        
          // nếu mà tồn tại thì nghĩa là chỉnh sửa
         for (let index = 0; index < this.product.length; index++) {
            if(this.product[index].id === this.newProduct.id){
                this.product[index] = this.newProduct;
            }
           
         }
      }else{
        console.log('đã thêm')
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
    this.product = this.product.filter(e => e.id !== id)
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
