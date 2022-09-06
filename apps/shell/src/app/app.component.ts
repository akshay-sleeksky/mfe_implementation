import { Component } from '@angular/core';

@Component({
  selector: 'wsangular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';

  public count : number = 0;

  public addCount = () =>{
    this.count ++;
  }
}
