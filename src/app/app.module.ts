import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './container/servers/form/form.component';
import { ServersDisplayComponent } from './container/servers/servers-display/servers-display.component';
import { ServerComponent } from './container/servers/servers-display/server/server.component';
import { UnlessDirective } from './directives/unless.directive';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './container/servers/servers.component';
import { ChartsComponent } from './container/charts/charts.component';
import { HomeComponent } from './container/home/home.component';
import { ServerDetailsComponent } from './container/servers/server-details/server-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id', component: ServerDetailsComponent },
  { path: 'charts', component: ChartsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContainerComponent,
    FooterComponent,
    FormComponent,
    ServersDisplayComponent,
    ServerComponent,
    UnlessDirective,
    ServersComponent,
    ChartsComponent,
    HomeComponent,
    ServerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
