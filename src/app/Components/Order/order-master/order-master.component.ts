import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent {
  receivedorderTotalPrice:number=0;
  catList:ICategory[];
  selectedCatId:number=0;
  orderDate:Date;

  constructor(){
    this.catList=[
      {id:1,name:'personal computers'},
      {id:2,name:'computer accessories'},
      {id:3,name:'screens'},
      {id:4,name:'cameras'},
    ];
    this.orderDate = new Date();
  }
  onTotalPriceChanged(totalPrice:number){
    this.receivedorderTotalPrice = totalPrice;
  }
}
