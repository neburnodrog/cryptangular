import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsContainerComponent } from './container/charts-container/charts-container.component';
import { CryptoContainerComponent } from './container/crypto-container/crypto-container.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { ServerDetailsComponent } from './container/servers-container/server-details/server-details.component';
import { ServersContainerComponent } from './container/servers-container/servers-container.component';
import { CanDeactivateGuard } from './container/servers-container/server-edit/can-deactivate.service';
import { ServerEditComponent } from './container/servers-container/server-edit/server-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './container/servers-container/services/server-resolver.service';
import { CryptoDetailsComponent } from './container/crypto-container/crypto-details/crypto-details.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard.service';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeContainerComponent },
  {
    path: 'servers',
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
    canActivate: [AuthGuard],
  },
  {
    path: 'crypto',
    component: CryptoContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crypto/:id',
    component: CryptoDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'charts',
    component: ChartsContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth/:mode',
    component: AuthComponent,
  },
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
