import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    .special   {
      background: red;
    }
  `],
  template: `
    <h1 [class.special]="isSpecial">
       Hello {{ name }}
    </h1>

    <img [src]="avatar" *ngIf="showImage">

    <user-list></user-list>
  `,
})
export class AppComponent  {
  name        = 'Blah Blah';
  avatar      = 'https://pbs.twimg.com/profile_images/850147482117865472/O28qQSrN.jpg';
  isSpecial   = true;
  showImage   = true;
  currentDate = new Date();

  constructor() {
    setInterval(() => this.currentDate = new Date(), 1000);
  }
}
