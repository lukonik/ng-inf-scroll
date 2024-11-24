import { ScrollerOptions } from './create-scroller';
import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

export const INF_SCROLLER_OPTIONS = new InjectionToken<ScrollerOptions>('ngInfSCrollToken');

export function provideInfScroller(
  options: ScrollerOptions
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: INF_SCROLLER_OPTIONS,
      useValue: options,
    },
  ]);
}
