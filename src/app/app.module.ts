import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HighchartsChartModule } from 'highcharts-angular';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
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
import { ServerEditComponent } from './container/servers-container/server-edit/server-edit.component';
import { CryptoContainerComponent } from './container/crypto-container/crypto-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './container/servers-container/server-edit/can-deactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './container/servers-container/services/server-resolver.service';
import { ServersService } from './container/servers-container/services/servers.service';
import { CryptoDetailsComponent } from './container/crypto-container/crypto-details/crypto-details.component';
import { ChartComponent } from './chart/chart.component';
import { CryptoOptionsMenuComponent } from './container/crypto-container/crypto-options-menu/crypto-options-menu.component';
import { dateToHTMLString } from './container/crypto-container/crypto-details/dateToString.pipe';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';

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
    PageNotFoundComponent,
    ErrorPageComponent,
    CryptoDetailsComponent,
    ChartComponent,
    CryptoOptionsMenuComponent,
    dateToHTMLString,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule,
    MaterialModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServersService,
    ServerResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
