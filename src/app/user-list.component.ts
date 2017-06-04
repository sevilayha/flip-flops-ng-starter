import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-list',
  styles: [`
    img   {
      max-width: 50px;
      border-radius: 3px;
    }
  `],
  template: `
    <div *ngFor="let user of users">
      <h2>{{ user.name }}</h2>
      <img [src]="user.avatar">
    </div>
  `
})
export class UserListComponent {
  @Input() users: any;
}
