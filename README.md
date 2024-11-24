# ng-inf-scroll
<p align="center">
  <img src="logo.png" alt="ng-inf-scroll logo" width="200" />
</p>

<p style="text-align: center; font-style: italic; margin-top: 5px;">Infinite scroll in your Angular App</p>

# ng-inf-scroll
`ng-inf-scroll` lightweight, extremly performant &#128640; Angular library designed to seamlessly implement infinite scroll functionality in your Angular applications.

# Installation
`npm install @ngverse/ng-inf-scroll`

# Usage
There are two ways to use `ng-inf-scroll` library. One is when you want to apply infinite scroll on viewport (Window) and another one is when you want to apply infinite scroll on some container element ( div ), Let's examine both of them

## Viewport infintie scroll
in order to use infinite scroll on the viewport, you have to inject `ViewportInfScroll`  class in your component and 
call scrolled method
```
  @Component({
     selector:"some-page",
     template:" <p> Page content </p> "
  })

export class SomePageComponent implements OnInit, OnDestroy{
  viewportInfScroll =inject(ViewportInfScroll)
  sub:Subscription;

  ngOnInit(){
    this.sub = this.vieportInfScrol.scrolled().subscribe(()=>{
        this.loadMore();
    })
  }

  loadMore(){
    // Load data
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
```

you can pass the following options

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
        Required
      <th>
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
      <td>
      <td>
        false
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
        offsetPercentage
      </td>
      <td>
        number, between 0-100
      <td>
      <td>
        false
      </td>
      <td>
        20
      </td>
      <td>
        percentage value that calculates 
        on what offset to emit scrolled event,
                
      </td>
    </tr>
  </tbody>
</table>

`ng-inf-scroll` operates in a **Zoneless** manner, ensuring optimal performance. Change detection is triggered only when necessary, minimizing the overhead and enhancing the responsiveness of your application.
# ng-inf-scroll
# ng-inf-scroll
