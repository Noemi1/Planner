import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { InitialComponent } from './parts/initial/initial.component';
import { MyAccountComponent } from './parts/my-account/my-account.component';
import { ResetPasswordComponent } from './parts/reset-password/reset-password.component';

const login = () => import('./pages/account/account.module').then(res => res.AccountModule);
const investimento = () => import('./pages/investimento/investimento.module').then(res => res.InvestimentoModule);

const routes: Routes = [
  { path: '', redirectTo: 'investimento', pathMatch: 'full' },
  {
    path: '', component: InitialComponent, /*canActivate: [AuthGuard], */children: [

      { path: 'investimento', loadChildren: investimento },

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
