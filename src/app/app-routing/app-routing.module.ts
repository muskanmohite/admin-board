import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UielementComponent } from '../uielement/uielement.component';
import { ChartsComponent } from '../charts/charts.component';
import { FormsComponent } from '../forms/forms.component';
import { DocsComponent } from '../docs/docs.component';
import { TableComponent } from '../table/table.component';
import { PagesComponent } from '../pages/pages.component';
import { BootstrapElementsComponent } from '../uielement/bootstrap-elements/bootstrap-elements.component';
import { CardComponent } from '../uielement/card/card.component';
import { FontIconComponent } from '../uielement/font-icon/font-icon.component';
import { WidgetComponent } from '../uielement/widget/widget.component';
import { FormComponentComponent } from '../forms/form-component/form-component.component';
import { CustomComponentComponent } from '../forms/custom-component/custom-component.component';
import { FormSampleComponent } from '../forms/form-sample/form-sample.component';
import { FormNotificationComponent } from '../forms/form-notification/form-notification.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'UI', component: UielementComponent },
   
    { path: 'bootstrap-element', component: BootstrapElementsComponent  },
    { path: 'card', component: CardComponent},
    { path: 'font-icon', component: FontIconComponent},
    { path: 'widget', component: WidgetComponent},

    
  { path: 'charts', component: ChartsComponent  },
  { path: 'forms', component: FormsComponent },
   
    { path: 'form-component', component: FormComponentComponent  },
    { path: 'custom-component', component: CustomComponentComponent },
    { path: 'form-sample', component: FormSampleComponent},
    { path: 'form-notification', component: FormNotificationComponent }
    
  ,
  { path: 'table', component: TableComponent  },
  { path: 'docs', component: DocsComponent  },

  { path: 'pages', component: PagesComponent  },



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }
 }

