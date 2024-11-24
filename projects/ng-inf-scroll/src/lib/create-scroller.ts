import {
  inject,
  Injectable,
  NgZone,
  runInInjectionContext,
} from '@angular/core';
import { SCROLL_ORIENTATION, Scroller } from './scroller';
import { INF_SCROLLER_OPTIONS } from './provide-inf-scroller';

export interface ScrollerOptions {
  offset?: number;
  offsetPercentage?: number;
  autoStop?: boolean;
  orientation?: SCROLL_ORIENTATION;
}

const DEFAULTS: ScrollerOptions = {
  offsetPercentage: 20,
  autoStop: true,
  orientation: 'y',
};

@Injectable({
  providedIn: 'root',
})
export class CreateScroller {
  private defaultOptions = inject(INF_SCROLLER_OPTIONS, { optional: true });

  getOptionValue(
    chosedOptions: ScrollerOptions,
    key: keyof ScrollerOptions
  ): any {
    if (chosedOptions[key] !== undefined) {
      return chosedOptions[key];
    }

    if (!this.defaultOptions) {
      return DEFAULTS[key];
    }
    if (this.defaultOptions[key] !== undefined) {
      return this.defaultOptions[key];
    }
    return DEFAULTS[key];
  }

  create(
    options: {
      scrollElement: HTMLElement | Window;
      checkingTo: HTMLElement;
    } & ScrollerOptions,
    ngZone: NgZone
  ) {
    const orientation = this.getOptionValue(options, 'orientation');
    const autoStop = this.getOptionValue(options, 'autoStop');
    const offset = this.getOptionValue(options, 'offset');
    const offsetPercentage = this.getOptionValue(options, 'offsetPercentage');

    const scroller = new Scroller(
      {
        scrollElement: options.scrollElement,
        checkingTo: options.checkingTo,
        offset: offset,
        orientation: orientation,
        autoStop: autoStop,
        offsetPercentage: offsetPercentage,
      },
      ngZone
    );
    return scroller;
  }
}
