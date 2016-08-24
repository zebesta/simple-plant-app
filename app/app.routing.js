"use strict";
var router_1 = require('@angular/router');
var plants_component_1 = require('./plants.component');
var dashboard_component_1 = require('./dashboard.component');
var plant_detail_component_1 = require('./plant-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'plants',
        component: plants_component_1.PlantsComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:_id',
        component: plant_detail_component_1.PlantDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map