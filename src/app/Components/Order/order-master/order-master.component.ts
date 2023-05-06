import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import {ProductListComponent} from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements AfterViewInit{
  receivedorderTotalPrice:number=0;
  catList:ICategory[];
  selectedCatId:number=0;
  orderDate:Date;
  @ViewChild('clientNameInp') clientNameInpElem!:ElementRef; //non Null assertion operator
  @ViewChild(ProductListComponent) prdListCompObj! : ProductListComponent

  constructor(){
    this.catList=[
      {id:1,name:'personal computers'},
      {id:2,name:'computer accessories'},
      {id:3,name:'screens'},
      {id:4,name:'cameras'},
    ];
    this.orderDate = new Date();
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value='type your name here';
    
  }
  onTotalPriceChanged(totalPrice:number){
    this.receivedorderTotalPrice = totalPrice;
  }
  completeOrder(){
    //test example
    //console.log(this.prdListCompObj.prdList);
  }
}
