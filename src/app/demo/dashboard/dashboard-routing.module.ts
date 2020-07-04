import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from 'src/app/pages/cliente/cliente.component';
import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';
import { VerClienteComponent } from 'src/app/pages/ver-cliente/ver-cliente.component';
import { EditarClienteComponent } from 'src/app/pages/editar-cliente/editar-cliente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadChildren: () => import('./dash-default/dash-default.module').then(module => module.DashDefaultModule)
      },
      {
        path: 'cliente',
        component: ClienteComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'ver-cliente',
        component: VerClienteComponent
      },
      {
        path: 'editar-cliente',
        component: EditarClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
