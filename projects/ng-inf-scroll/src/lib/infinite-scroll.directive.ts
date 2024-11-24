import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  OnDestroy,
  output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SCROLL_ORIENTATION, Scroller } from './scroller';
import { CreateScroller, ScrollerOptions } from './create-scroller';

@Directive({
  selector: '[infScroll]',
  standalone: true,
})
export class InfScrollDirective implements OnDestroy {
  el = inject<ElementRef<HTMLElement>>(ElementRef);
  createScroller = inject(CreateScroller);
  orientation = input<SCROLL_ORIENTATION>();
  autoStop = input<boolean>();
  offset = input<number>();
  offsetPercentage = input<number>();

  private _scroller!: Scroller;

  scrolled = output();
  sub: Subscription | undefined;

  zone = inject(NgZone);

  constructor() {
    effect(() => {
      this.cleanup();
      const options = {
        offset: this.offset(),
        autoStop: this.autoStop(),
        orientation: this.orientation(),
        offsetPercentage: this.offsetPercentage(),
      } as ScrollerOptions;
      this._scroller = this.createScroller.create(
        {
          ...options,
          scrollElement: this.el.nativeElement,
          checkingTo: this.el.nativeElement,
        },
        this.zone
      );
      this.sub = this._scroller.scrolled().subscribe(() => {
        this.scrolled.emit();
      });
    });
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  cleanup() {
    this.sub?.unsubscribe();
    this.sub = new Subscription();
  }
}
