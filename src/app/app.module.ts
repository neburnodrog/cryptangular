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

const appRoutes: Routes = [
  { path: '', component: ServersComponent },
  { path: 'servers', component: ContainerComponent },
  { path: 'servers', component: ContainerComponent },
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
