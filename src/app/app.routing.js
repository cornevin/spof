"use strict";
var router_1 = require('@angular/router');
var core_component_1 = require('./components/core/core.component.ts');
var login_component_1 = require('./components/login/login.component.ts');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'core',
        component: core_component_1.CoreComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map