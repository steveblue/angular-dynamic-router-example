

import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view/view.component';

const routes: Routes = [
    {

      path: '',
      component: ViewComponent,
      children: []

    }
];

export const routing = RouterModule.forRoot(routes);