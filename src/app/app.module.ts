import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './container/servers-container/form/form.component';
import { ServersDisplayComponent } from './container/servers-container/servers-display/servers-display.component';
import { ServerComponent } from './container/servers-container/servers-display/server-card/server-card.component';
import { UnlessDirective } from './directives/unless.directive';
import { ServersContainerComponent } from './container/servers-container/servers-container.component';
import { ChartsContainerComponent } from './container/charts-container/charts-container.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { ServerDetailsComponent } from './container/servers-container/server-details/server-details.component';
import { ServerEditComponent } from './container/servers/server-edit/server-edit.component';
import { CryptoContainerComponent } from './container/crypto-container/crypto-container.component';

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
    ServersContainerComponent,
    ChartsContainerComponent,
    HomeContainerComponent,
    ServerDetailsComponent,
    ServerEditComponent,
    CryptoContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
