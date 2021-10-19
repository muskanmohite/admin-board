import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UielementComponent } from './uielement/uielement.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { PagesComponent } from './pages/pages.component';
import { DocsComponent } from './docs/docs.component';
import { BootstrapElementsComponent } from './uielement/bootstrap-elements/bootstrap-elements.component';
import { FontIconComponent } from './uielement/font-icon/font-icon.component';
import { CardComponent } from './uielement/card/card.component';
import { WidgetComponent } from './uielement/widget/widget.component';
import { FormComponentComponent } from './forms/form-component/form-component.component';
import { CustomComponentComponent } from './forms/custom-component/custom-component.component';
import { FormSampleComponent } from './forms/form-sample/form-sample.component';
import { FormNotificationComponent } from './forms/form-notification/form-notification.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    UielementComponent,
    ChartsComponent,
    FormsComponent,
    TableComponent,
    PagesComponent,
    DocsComponent,
    BootstrapElementsComponent,
    FontIconComponent,
    CardComponent,
    WidgetComponent,
    FormComponentComponent,
    CustomComponentComponent,
    FormSampleComponent,
    FormNotificationComponent,
    
  ],
  imports: [
    
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
