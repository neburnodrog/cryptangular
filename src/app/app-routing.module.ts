import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ChartsContainerComponent } from './container/charts-container/charts-container.component';
import { CryptoContainerComponent } from './container/crypto-container/crypto-container.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { ServerDetailsComponent } from './container/servers-container/server-details/server-details.component';
import { ServersContainerComponent } from './container/servers-container/servers-container.component';
import { CanDeactivateGuard } from './container/servers-container/server-edit/can-deactivate.service';
import { ServerEditComponent } from './container/servers-container/server-edit/server-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './container/servers-container/services/server-resolver.service';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeContainerComponent },
  {
    path: 'servers',
    canActivateChild: [AuthGuard],
    component: ServersContainerComponent,
    children: [
      {
        path: ':id',
        component: ServerDetailsComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: ServerEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  { path: 'crypto', component: CryptoContainerComponent },
  { path: 'charts', component: ChartsContainerComponent },
  // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found' },
  },
  { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
