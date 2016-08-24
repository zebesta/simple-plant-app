"use strict";
var router_1 = require('@angular/router');
var plants_component_1 = require('./plants.component');
var dashboard_component_1 = require('./dashboard.component');
var appRoutes = [
    {
        path: 'plants',
        component: plants_component_1.PlantsComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map