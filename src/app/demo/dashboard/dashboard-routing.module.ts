import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from 'src/app/pages/cliente/cliente.component';
import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';
import { VerClienteComponent } from 'src/app/pages/ver-cliente/ver-cliente.component';
import { EditarClienteComponent } from 'src/app/pages/editar-cliente/editar-cliente.component';
import { CategoriaComponent } from 'src/app/pages/evento/categoria/categoria.component';
import { EventoComponent } from 'src/app/pages/evento/evento/evento.component';
import { FinalizaEventoComponent } from 'src/app/pages/evento/finaliza-evento/finaliza-evento.component';
import { PerfilClientesComponent } from 'src/app/pages/perfils/perfil-clientes/perfil-clientes.component';
import { FornecedorComponent } from 'src/app/fornecedor/fornecedor.component';
import { FornecedoresComponent } from 'src/app/fornecedores/fornecedores.component';

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
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'evento',
        component: EventoComponent
      },
      {
        path: 'finalizarEvento',
        component: FinalizaEventoComponent
      },
      {
        path: 'perfilClientes',
        component: PerfilClientesComponent
      },
      {
        path: 'fornecedor',
        component: FornecedorComponent
      },
      {
        path: 'fornecedores',
        component: FornecedoresComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
