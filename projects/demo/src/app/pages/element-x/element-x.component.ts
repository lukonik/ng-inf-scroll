import { Component, inject, signal } from '@angular/core';
import { InfScrollDirective } from '../../../../../ng-inf-scroll/src/public-api';
import { UserCardComponent } from '../user-card/user-card.component';
import { BasePage } from '../base-page';

@Component({
  selector: 'app-element-x',
  standalone: true,
  imports: [InfScrollDirective, UserCardComponent],
  templateUrl: './element-x.component.html',
  styleUrl: './element-x.component.scss',
})
export class ElementXComponent   extends BasePage{
}