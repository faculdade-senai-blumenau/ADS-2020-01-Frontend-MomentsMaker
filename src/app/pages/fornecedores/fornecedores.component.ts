import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../models/fornecedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  fornecedores: Fornecedor[]

  ngOnInit(): void {
    this.fornecedorService.getAll().subscribe(data => {
      this.fornecedores = data;
    })
  }

  editar(fornecedor: Fornecedor) {
    window.localStorage.removeItem("fornecedorId");
    window.localStorage.setItem("fornecedorId", fornecedor.id.toString());
    this.router.navigate(['/dashboard/editar-fornecedor'])
  }

  deletar(fornecedor: Fornecedor) {
    if(confirm("Tem certeza que deseja deletar o fornecedor?")){
      this.fornecedorService.deletar(fornecedor.id)
      .subscribe( data => {
        this.fornecedores = this.fornecedores.filter(u => u !== fornecedor);
      })
    }
  }

}
