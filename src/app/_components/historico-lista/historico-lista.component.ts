import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatTableDataSource, MatDialog } from '@angular/material';
import { drogaria, contatoDrogaria, funcionario } from 'src/app/_models';
import { ContatoDrogariaService, AuthenticationService } from 'src/app/_services';
import { VincularFuncionarioComponent, ConfirmacaoExclusaoContatoComponent } from '../../_components';

@Component({
  selector: 'app-historico-lista',
  templateUrl: './historico-lista.component.html',
  styleUrls: ['./historico-lista.component.css']
})
export class HistoricoListaComponent implements OnInit {

  dataSource: MatTableDataSource<contatoDrogaria>;
  colunas: string[] = ['ID', 'NomeFantasia', 'Funcionario', 'Data', 'TipoProposta', 'Status', 'Observacao', 'Acoes'];
  user : funcionario;

  constructor(public dialogRef: MatDialogRef<HistoricoListaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              private contatoDrogariaService : ContatoDrogariaService,
              private authenticationService: AuthenticationService,
              public vincularFuncionarioDialog: MatDialog,
              public confirmacaoExclusaoDialog: MatDialog,
              private snackBar: MatSnackBar) { 
                this.buscarHistorico(data.drog.id)
              }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
  }

  openVincularFuncionarioDialog(drog: drogaria): void {
    const dialogRef = this.vincularFuncionarioDialog.open(VincularFuncionarioComponent, {
      data: { drog }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true)
        this.buscarHistorico(drog.id);
    })
  }

  buscarHistorico(id: number) {
    return this.contatoDrogariaService.findByDrogariaId(id)
    .subscribe(
      data => {
        const contatosDrogaria = data.resultado as contatoDrogaria[];
        this.dataSource = new MatTableDataSource<contatoDrogaria>(contatosDrogaria);
      },
      err => {
        console.log(err);
      }
    )
  }

  excluirContatoDrogaria(contatoDrog: contatoDrogaria) : void {
    const confirmaExclusaoDialog = this.confirmacaoExclusaoDialog.open(ConfirmacaoExclusaoContatoComponent, {
      data: { contatoDrog }
    });

    confirmaExclusaoDialog.afterClosed().subscribe(result => {
      if (result == true)
        this.buscarHistorico(contatoDrog.drogaria.id)
    });
  }
  
}
