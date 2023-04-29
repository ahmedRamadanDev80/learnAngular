import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
storeInfo:StoreData;
isImgShown:boolean=true;
constructor(){
  this.storeInfo = new StoreData('altair store','https://picsum.photos/200/200',['cairo','alex','beheira']);
}
toggleImg(){this.isImgShown = !this.isImgShown}
}
