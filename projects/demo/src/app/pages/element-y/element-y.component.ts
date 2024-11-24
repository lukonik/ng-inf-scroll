import { Component, inject, signal } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { DataService } from '../../data.service';
import { UserModel } from '../../models';
import { BasePage } from '../base-page';
import { InfScrollDirective } from '../../../../../ng-inf-scroll/src/public-api';

@Component({
  selector: 'app-element-y',
  standalone: true,
  imports: [UserCardComponent, InfScrollDirective],
  templateUrl: './element-y.component.html',
  styleUrl: './element-y.component.scss',
})
export class ElementYComponent extends BasePage {}
