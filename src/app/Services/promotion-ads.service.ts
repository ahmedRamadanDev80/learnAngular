import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList:string[];
  constructor() { 
    this.adsList = ['big discount'
                    ,'sale up to 50%'
                    ,'black friday offers'
                    ,'wabba labba dub dub'
                    ,'special white friday 70% sale offer'];
  }

  getScheduledAds(intervalInSeconds:number):Observable<string>
  {
    return new Observable<string>((observer)=>{
      // observer.next();
      // observer.error();
      // observer.complete();
      let counter =0;
      let adsTimer = setInterval(()=>{
        if(counter == this.adsList.length){
          observer.complete();
        }
        if(this.adsList[counter]==''){
          observer.error("Error: Empty Ad ! ");
        }
        observer.next(this.adsList[counter]);
        counter++;

      },intervalInSeconds*1000);
      return { 
        unsubscribe(){
          clearInterval(adsTimer);
        }
      }
    });
  }

  getSerialAds():Observable<string>{
    return from(this.adsList);
  }
}
