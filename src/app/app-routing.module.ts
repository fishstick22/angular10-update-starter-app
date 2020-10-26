import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';

// import { AuthGuard } from './core/auth/auth.guard';
// import { CallbackComponent } from './core/auth/callback.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  // { path: 'dashboard',      loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
  // { path: 'communications', loadChildren: './communications/communications.module#CommunicationsModule', canActivate: [AuthGuard] },
  // { path: 'programs',       loadChildren: './programs/programs.module#ProgramsModule', canActivate: [AuthGuard] },
  // { path: 'clients',        loadChildren: './clients/clients.module#ClientsModule', canActivate: [AuthGuard] },
  { path: 'shared-test',    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  // { path: 'callback',       component: CallbackComponent },

  { path: 'explore', loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule) },
  { path: '**',             component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // providers: [AuthGuard],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
