import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ChartsContainerComponent } from './container/charts-container/charts-container.component';
import { CryptoContainerComponent } from './container/crypto-container/crypto-container.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { ServerDetailsComponent } from './container/servers-container/server-details/server-details.component';
import { ServersContainerComponent } from './container/servers-container/servers-container.component';
import { ServerEditComponent } from './container/servers/server-edit/server-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeContainerComponent },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersContainerComponent,
    children: [
      { path: ':id', component: ServerDetailsComponent },
      { path: ':id/edit', component: ServerEditComponent },
    ],
  },
  { path: 'crypto', component: CryptoContainerComponent },
  { path: 'charts', component: ChartsContainerComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
