import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  InfScrollDirective,
  ViewportInfScroll,
} from '../../../ng-inf-scroll/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfScrollDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'demo';
  el = inject(ElementRef<HTMLElement>);
  cf = inject(ChangeDetectorRef);
  viewportInfScroll = inject(ViewportInfScroll);
  appRef = inject(ApplicationRef);

  ngOnInit(): void {
    this.appRef.isStable.subscribe(() => {
      console.log('Zone check');
    });
    // this.viewportInfScroll
    //   .scrolled({
    //     orientation: 'x',
    //   })
    //   .subscribe(() => {
    //     this.loadMore();
    //   });
  }
  data = new Array(50).fill(1);

  loadMore() {
    setTimeout(() => {
      this.data = [...this.data, ...this.data];
      this.cf.markForCheck();
    }, 100);
  }
}
