import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InitialComponent } from './parts/initial/initial.component';


const login = () => import('./pages/account/account.module').then(res => res.AccountModule);

const routes: Routes = [
  {
    path: '', component: InitialComponent, children: [
      { path: '', component: HomeComponent },
    ]
  },
  { path: 'account', loadChildren: login },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
