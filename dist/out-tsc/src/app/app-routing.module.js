import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { AuthGuard } from './services/auth.guard';
const routes = [
    { path: 'user-dash', component: UserDashComponent, canActivate: [AuthGuard] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map