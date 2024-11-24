import { Component, input } from '@angular/core';
import { UserModel } from '../../models';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  user = input.required<UserModel>();
}
