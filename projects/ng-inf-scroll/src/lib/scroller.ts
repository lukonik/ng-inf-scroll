import { NgZone } from '@angular/core';
import {
  animationFrameScheduler,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Observable,
  observeOn,
  pairwise,
  Subscription,
  tap,
} from 'rxjs';
import { isYScrolledToEnd } from './utils/is-y-scrolled-to-end';
import { isXScrolledToEnd } from './utils/is-x-scrolled-to-end';

export type SCROLL_ORIENTATION = 'x' | 'y';

export interface ScrollerRawOptions {
  scrollElement: HTMLElement | Window;
  checkingTo: HTMLElement;
  orientation: SCROLL_ORIENTATION;
  autoStop: boolean;
  offsetPercentage: number;
}

export class Scroller {
  constructor(protected options: ScrollerRawOptions, private zone: NgZone) {}

  private computeOffset() {
    if (this.options.orientation === 'y') {
      return Math.round(
        (this.options.checkingTo.scrollHeight * this.options.offsetPercentage) /
          100
      );
    }
    return Math.round(
      (this.options.checkingTo.scrollWidth * this.options.offsetPercentage) /
        100
    );
  }

  private getScrollEndComputer() {
    return this.options.orientation === 'y'
      ? () => isYScrolledToEnd(this.options.checkingTo, this.computeOffset())
      : () => isXScrolledToEnd(this.options.checkingTo, this.computeOffset());
  }

  scrolled() {
    return new Observable((observable) => {
      let sub: Subscription | undefined;
      this.zone.runOutsideAngular(() => {
        let stream$: Observable<any> = fromEvent(
          this.options.scrollElement,
          'scroll'
        ).pipe(observeOn(animationFrameScheduler)); // In order to improve performance, we run comutations in requestAnimationFrame
        // check for more info https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#examples);
        const computer = this.getScrollEndComputer();

        stream$ = stream$.pipe(
          map(() => computer()),
          distinctUntilChanged(),
          filter((isEnd) => isEnd)
        );

        if (this.options.autoStop) {
          stream$ = stream$.pipe(
            map(() => this.options.checkingTo.scrollHeight),
            distinctUntilChanged()
          );
        }

        sub = stream$.subscribe(() => {
          this.zone.run(() => {
            observable.next();
          });
        });
      });
      return () => {
        sub?.unsubscribe();
      };
    });
  }
}
