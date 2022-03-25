import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail:any;
  id : any;
  constructor( 
    private ps:ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.id =  this.route.snapshot.params['id'];
    this.ps.getProduct(this.id).subscribe(data=> {
      this.productDetail = data ;
      // console.log(this.productDetail);
    })
  }

}
