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

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'UI', component: UielementComponent  },
  { path: 'charts', component: ChartsComponent  },
  { path: 'forms', component: FormsComponent  },
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

