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
