import { Routes, RouterModule } from '@angular/router';

import { PlantsComponent } from './plants.component';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [

  {
    path: 'plants',
    component: PlantsComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
