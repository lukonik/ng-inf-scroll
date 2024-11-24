import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BasePage } from '../base-page';
import { Subscription } from 'rxjs';
import { ViewportInfScroll } from '../../../../../ng-inf-scroll/src/public-api';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-viewport-y',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './viewport-y.component.html',
  styleUrl: './viewport-y.component.scss',
})
export class ViewportYComponent extends BasePage implements OnDestroy, OnInit {
  sub!: Subscription;
  viewportScroller = inject(ViewportInfScroll);

  ngOnInit(): void {
    this.viewportScroller.scrolled().subscribe(() => {
      this.loadMore();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
