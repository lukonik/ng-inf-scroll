import { Component, inject, signal } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { DataService } from '../../data.service';
import { UserModel } from '../../models';
import { BasePage } from '../base-page';
import { InfScroll } from 'ng-inf-scroll'

@Component({
  selector: 'app-element-y',
  standalone: true,
  imports: [UserCardComponent, InfScroll],
  templateUrl: './element-y.component.html',
  styleUrl: './element-y.component.scss',
})
export class ElementYComponent extends BasePage {}

@Component({
  selector: 'some-page',
  styles: [
    `
      .container {
        height: '200px';
        overflow-y:auto;
      }
    `,
  ],
  template: `
    <div class="container" infScroll (scrolled)="loadMore()">
      @for (item of data; track $index) {
      <h1>{{ item }}</h1>
      }
    </div>
  `,
  standalone: true,
  imports: [InfScroll],
})
export class SomePageComponent {
  data = new Array(100).fill(() => Math.random()); // Random numbers length:100

  loadMore() {
    // Load data
  }
}
