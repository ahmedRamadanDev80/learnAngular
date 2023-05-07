import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges ,OnInit {

  orderTotalPrice:number=0;
  @Input() sentCatId:number=0;
  @Output() totalPriceChanged:EventEmitter<number>;
  // orderDate:Date; 
  prdListOfCat:IProduct[]=[];

  constructor(private staticPrdServie:StaticProductsService,private router:Router)
  {
    this.totalPriceChanged=new EventEmitter<number>();
    // this.orderDate = new Date();
  }

  buy(prdPrice:number,count:string){
    this.orderTotalPrice += parseInt(count) *prdPrice;
    //execute event
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }
  openPrdDetails(pId :number){
    this.router.navigate(['/products',pId]);
  }

  ngOnChanges(): void{
    this.prdListOfCat = this.staticPrdServie.getByCatId(this.sentCatId);
  }
  ngOnInit(): void {
    this.prdListOfCat = this.staticPrdServie.getAll();
  }
}
