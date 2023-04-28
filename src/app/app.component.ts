import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnAngular';
  msg = 'damn this is easy'
  sayHello():string{
    return `Hellooooo, ${this.msg}`
  }
}
