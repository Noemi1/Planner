import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InitialComponent } from './parts/initial/initial.component';
import { MyAccountComponent } from './parts/my-account/my-account.component';
import { ResetPasswordComponent } from './parts/reset-password/reset-password.component';

const login = () => import('./pages/account/account.module').then(res => res.AccountModule);

const routes: Routes = [
  {
    path: '', component: InitialComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ]
  },
  { path: 'account', loadChildren: login },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
