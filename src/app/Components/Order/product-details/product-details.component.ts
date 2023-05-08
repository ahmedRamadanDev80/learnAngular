import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  
  currentPrdId:number =0;
  prd:IProduct |null = null;
  prdIdsArr:number[] =[]
  constructor(private activatedRoute:ActivatedRoute,
              private prdService:StaticProductsService,
              private location:Location,
              private router:Router){}

  ngOnInit(): void {

    // if wee will only navigate to this component once and will not call it again from itself
    // we can use activateRoute.snapshot

    //this.currentPrdId=Number(this.activatedRoute.snapshot.paramMap.get('pid'));

    this.prdIdsArr =this.prdService.getIds();

    // when navigate to the same component,WILL NOT Reload component
    //even if the route params changed.
    this.activatedRoute.paramMap.subscribe(paramMap => {
          this.currentPrdId = Number(paramMap.get('pid'));
          this.prd = this.prdService.getById(this.currentPrdId);
    }
    );
  }
  
  goBack(){
    this.location.back();
  }
  prevPrd(){
    let currIndex = this.prdIdsArr.findIndex(elem=>elem==this.currentPrdId);
    let prevIndex;
    //console.log(currIndex);
    if(currIndex >0)
    {
      prevIndex=this.prdIdsArr[currIndex-1];
      this.router.navigate(['/products',prevIndex]);
    }
}
  nextPrd(){
    let currIndex = this.prdIdsArr.findIndex(elem=>elem==this.currentPrdId);
    let nextIndex;
    //console.log(currIndex);
    if(currIndex <this.prdIdsArr.length)
    {
      nextIndex=this.prdIdsArr[currIndex+1];
      this.router.navigate(['/products',nextIndex]);
    }
  }
}
