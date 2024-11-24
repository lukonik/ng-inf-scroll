# ng-inf-scroll

<p align="center">
  <img src="logo.png" alt="ng-inf-scroll logo" width="200" />
</p>

`ng-inf-scroll` is lightweight, extremly performant &#128640; Angular library designed to seamlessly implement infinite scroll functionality in your Angular applications.

# Installation

`npm install ng-inf-scroll`

# Usage

There are two ways to use `ng-inf-scroll` library.

- use on window
- use on container element

## On Window

In order to use infinite scroll on `Window` ( root element ) inject `ViewportInfScroller` service in your component and listen to the `scrolled` observable

```
@Component({
  selector: 'some-page',
  template: ' <p> Page content </p> ',
})
export class SomePageComponent implements OnInit, OnDestroy {
  viewportInfScroll = inject(ViewportInfScroll);
  sub: Subscription;

  ngOnInit() {
    this.sub = this.viewportInfScroll.scrolled().subscribe(() => {
      this.loadMore();
    });
  }

  loadMore() {
    // Load data
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
```

dont't forget to unsubscribe the observable on `ngOnDestroy` callback to cleanup listener.

## On Container element

if you have some container element and you want to attach infinite-scroll on in, use `infScroll` directive

```
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
```

# Options

<table>
  <thead>
    <tr>
      <th>
        Property name
      </th>
      <th>
        type
      </th>
      <th>
        Default
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        orientation
      </td>
      <td>
        'x' | 'y'
      </td>
      <td>
        'y'
      </td>
      <td>
        scroll orientation, y is vertical, x is horizontal
      </td>
    </tr>
    <tr>
      <td>
        autoStop
      </td>
      <td>
        boolean
      </td>
      <td>
        true
      </td>
      <td>
      When this value is set to true, the scrolled event will not emit if the container's height remains unchanged after the last emission. For instance, if the scrolled event is triggered, and you fetch data from the server but the response is empty, the container's height will stay the same. This indicates that you've reached the end of the infinite scroll.
      </td>
    </tr>
    <tr>
      <td>
       offsetPercentage
      </td>
      <td>
        number
      </td>
      <td>
        20
      </td>
      <td>
     This value determines when to emit the <code>scrolled</code> event, based on a percentage calculated from the container's  <code>scrollHeight</code> or <code>scrollWidth</code>. For example, initially, your container's scroll height might be <code>300px</code>. As you load more data through infinite scrolling, the scroll height increases to <code>1000px</code>. This setting ensures the scrolled event is emitted consistently at the same relative scroll position, regardless of the container's changing height.
      </td>
    </tr>
  </tbody>
</table>

# Overide default options

To override the default options, use the provideInfScroll function in appConfig.

```
import { ApplicationConfig } from '@angular/core';
import { provideInfScroller } from 'ng-inf-scroll';

export const appConfig: ApplicationConfig = {
  providers: [
    provideInfScroller({
      autoStop: false,
      offsetPercentage: 30,
    }),
  ],
};

```
