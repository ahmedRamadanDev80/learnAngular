import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  orderTotalPrice:number=0;
  selectedCatId:number=0;
  catList:ICategory[];
  prdList:IProduct[];
  constructor()
  {
    this.prdList=[
      {id:1,name:'laptop',price:20000,quantity:10,imgUrl:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:2,name:'pc',price:21000,quantity:15,imgUrl:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:3,name:'mechanical keyboard',price:200,quantity:100,imgUrl:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:4,name:'logitec mouse',price:150,quantity:110,imgUrl:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:5,name:'asus screen',price:2000,quantity:1,imgUrl:'https://fakeimg.pl/200x100/',categoryId:3},
      {id:6,name:'cannon camera',price:3000,quantity:0,imgUrl:'https://fakeimg.pl/200x100/',categoryId:4}
    ];
    this.catList=[
      {id:1,name:'personal computers'},
      {id:2,name:'computer accessories'},
      {id:3,name:'screens'},
      {id:4,name:'cameras'},
    ]
  }

  buy(prdPrice:number,count:string){
    this.orderTotalPrice = parseInt(count) *prdPrice;
  }
}
