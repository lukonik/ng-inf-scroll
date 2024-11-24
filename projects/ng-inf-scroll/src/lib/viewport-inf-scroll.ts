import { inject, Injectable, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CreateScroller, ScrollerOptions } from './create-scroller';

@Injectable({ providedIn: 'root' })
export class ViewportInfScroll {
  document = inject(DOCUMENT);
  zone = inject(NgZone);
  createScroller = inject(CreateScroller);
  scrolled(options?: ScrollerOptions) {
    const scroller = this.createScroller.create(
      {
        ...options,
        scrollElement: this.document.defaultView as Window,
        checkingTo: this.document.scrollingElement as HTMLElement,
      },
      this.zone
    );
    return scroller.scrolled();
  }
}
