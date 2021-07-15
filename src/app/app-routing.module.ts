import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsContainerComponent } from './container/charts-container/charts-container.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { ServerDetailsComponent } from './container/servers-container/server-details/server-details.component';
import { ServersContainerComponent } from './container/servers-container/servers-container.component';

const appRoutes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'servers', component: ServersContainerComponent },
  { path: 'servers/:id', component: ServerDetailsComponent },
  { path: 'charts', component: ChartsContainerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
