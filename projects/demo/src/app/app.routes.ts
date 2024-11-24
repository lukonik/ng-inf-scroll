import { Routes } from '@angular/router';
import { ElementXComponent } from './pages/element-x/element-x.component';
import { ElementYComponent } from './pages/element-y/element-y.component';
import { ViewportXComponent } from './pages/viewport-x/viewport-x.component';
import { ViewportYComponent } from './pages/viewport-y/viewport-y.component';

export const routes: Routes = [
  {
    path: 'element-x',
    component: ElementXComponent,
  },
  {
    path: 'element-y',
    component: ElementYComponent,
  },
  {
    path: 'viewport-x',
    component: ViewportXComponent,
  },
  {
    path: 'viewport-y',
    component: ViewportYComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'element-y',
  },
];
