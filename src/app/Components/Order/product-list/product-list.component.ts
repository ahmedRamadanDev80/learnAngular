import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  orderTotalPrice:number=0;
  @Input() sentCatId:number=0;
  @Output() totalPriceChanged:EventEmitter<number>;
  // orderDate:Date;
  
  prdList:IProduct[];
  prdListOfCat:IProduct[]=[];

  constructor()
  {
    this.prdList=[
      {id:1,name:'laptop',price:2000,quantity:10,imgUrl:'https://fakeimg.pl/100x50/',categoryId:1},
      {id:2,name:'gaming laptop',price:2000,quantity:10,imgUrl:'https://fakeimg.pl/100x50/',categoryId:1},
      {id:3,name:'pc',price:2100,quantity:15,imgUrl:'https://fakeimg.pl/100x50/',categoryId:1},
      {id:4,name:'mechanical keyboard',price:200,quantity:100,imgUrl:'https://fakeimg.pl/100x50/',categoryId:2},
      {id:5,name:'logitec mouse',price:150,quantity:110,imgUrl:'https://fakeimg.pl/100x50/',categoryId:2},
      {id:6,name:'asus screen',price:800,quantity:1,imgUrl:'https://fakeimg.pl/100x50/',categoryId:3},
      {id:7,name:'cannon camera',price:300,quantity:0,imgUrl:'https://fakeimg.pl/100x50/',categoryId:4},
      {id:8,name:'sony camera',price:400,quantity:3,imgUrl:'https://fakeimg.pl/100x50/',categoryId:4}
    ];
    this.totalPriceChanged=new EventEmitter<number>();
    // this.orderDate = new Date();
  }

  buy(prdPrice:number,count:string){
    this.orderTotalPrice += parseInt(count) *prdPrice;
    //execute event
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }
  private filterProductsById(){
    if(this.sentCatId ==0)
      this.prdListOfCat = this.prdList;
    else
      this.prdListOfCat=this.prdList.filter(prd=>prd.categoryId==this.sentCatId);
  }
  ngOnChanges(): void{
    this.filterProductsById();
  }
}
