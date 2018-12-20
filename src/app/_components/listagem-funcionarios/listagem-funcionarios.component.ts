import { Component, OnInit } from '@angular/core';
import { funcionario } from 'src/app/_models';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FuncionarioService } from '../../_services';
import { ConfirmacaoExclusaoFuncionarioComponent } from '../confirmacao-exclusao-funcionario';
import { CadastroFuncionarioComponent } from '..';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.css']
})
export class ListagemFuncionariosComponent implements OnInit {

  dataSource: MatTableDataSource<funcionario>;
  colunas: string[] = ['ID', 'Nome', 'Login', 'CorMarcacao', 'Acoes'];
  private search: string;

  constructor(private funcionarioService : FuncionarioService,
              public excluirFuncionarioDialog: MatDialog,
              public cadastroFuncionarioDialog: MatDialog) { }

  ngOnInit() {
    this.search = "";

    this.exibirFuncionarios();
  }

  onKey(value: string) {
    if (value.length >= 3)
    {
      this.search = value;
      this.exibirFuncionarios();
    }
    else if (value.length == 0)
    {
      this.search = "";
      this.exibirFuncionarios();
    } 
  }

  openCadastrarFuncionarioDialog(): void {
    const dialogRef = this.cadastroFuncionarioDialog.open(CadastroFuncionarioComponent, null);

    dialogRef.afterClosed().subscribe(result => {
      if (result == true)
        this.exibirFuncionarios();
    })
  }

  openExcluirFuncionarioDialog(func: funcionario): void {
    const dialogRef = this.excluirFuncionarioDialog.open(ConfirmacaoExclusaoFuncionarioComponent, {
      data: { func }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true)
        this.exibirFuncionarios();
    })
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
