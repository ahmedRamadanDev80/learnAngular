import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  private subscriptions:Subscription[] =[];
  storeInfo:StoreData;
  isImgShown:boolean=true;
constructor(private promoAd:PromotionAdsService){
  this.storeInfo = new StoreData('altair store','https://picsum.photos/200/200',['cairo','alex','beheira']);
}
 
  ngOnInit(): void {
    let observer = {
      next:(data:string)=>{ console.log(data); },
      error:(err:string)=>{ console.log(err);  },
      complete:()=>{ console.log('ads complete.'); }
    };

    this.subscriptions.push( this.promoAd.getScheduledAds(3).subscribe(observer));
   
  }
toggleImg(){this.isImgShown = !this.isImgShown}

ngOnDestroy(): void {
  for(let sub of this.subscriptions){
    sub.unsubscribe();
  }
}
}
