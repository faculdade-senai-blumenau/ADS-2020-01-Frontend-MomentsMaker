import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from 'src/app/pages/evento/categoria/categoria.component';
import { EventoComponent } from 'src/app/pages/evento/evento/evento.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadChildren: () => import('./dash-default/dash-default.module').then(module => module.DashDefaultModule)
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'evento',
        component: EventoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
