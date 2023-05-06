import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private prdList:IProduct[];
  constructor() {
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
   }

   getAll(): IProduct[] {
    return this.prdList;
  }
   getByCatId(cId:number): IProduct[] {
    if(cId ==0)
      return this.prdList;
    else
      return this.prdList.filter(prd=>prd.categoryId==cId); 
   }

   getById(id:number):IProduct | null{
    let found =  this.prdList.find(prd=>prd.id = id);
    return found ? found : null;
   }
}
