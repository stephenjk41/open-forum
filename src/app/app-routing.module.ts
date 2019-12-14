import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'user-dash', component: UserDashComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
