import { Routes, RouterModule } from '@angular/router';

import { PlantsComponent } from './plants.component';
import { DashboardComponent } from './dashboard.component';
import { PlantDetailComponent } from './plant-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'plants',
    component: PlantsComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:_id',
    component: PlantDetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
