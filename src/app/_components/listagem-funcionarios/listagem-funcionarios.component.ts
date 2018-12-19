import { Component, OnInit } from '@angular/core';
import { funcionario } from 'src/app/_models';
import { MatTableDataSource } from '@angular/material';
import { FuncionarioService } from '../../_services';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.css']
})
export class ListagemFuncionariosComponent implements OnInit {

  dataSource: MatTableDataSource<funcionario>;
  colunas: string[] = ['ID', 'Nome', 'Login', 'CorMarcacao', 'Acoes'];
  private search: string;

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit() {
    this.search = "";

    this.exibirFuncionarios();
  }

  exibirFuncionarios() {
    this.funcionarioService.listarFuncionarios(this.search)
    .subscribe(
      data => {
        const funcionarios = data as funcionario[];
        this.dataSource = new MatTableDataSource<funcionario>(funcionarios);
      },
      err => {
        console.log(err);
      }
    )
  }

}
