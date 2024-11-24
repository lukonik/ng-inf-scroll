import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewportInfScroll } from 'ng-inf-scroll';
import { BasePage } from '../base-page';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-viewport-x',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './viewport-x.component.html',
  styleUrl: './viewport-x.component.scss',
})
export class ViewportXComponent extends BasePage implements OnDestroy, OnInit {
  sub!: Subscription;
  viewportScroller = inject(ViewportInfScroll);

  ngOnInit(): void {
    this.viewportScroller
      .scrolled({
        orientation: 'x',
      })
      .subscribe(() => {
        this.loadMore();
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
