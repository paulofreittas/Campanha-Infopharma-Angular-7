import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatTableDataSource, MatDialog } from '@angular/material';
import { drogaria, usuarioIdFkNavigation, contatoUsuarioCampanha } from '../../_models';
import { ContatoDrogariaService, AuthenticationService } from '../../_services';
import { VincularFuncionarioComponent, ConfirmacaoExclusaoContatoComponent } from '../../_components';

@Component({
  selector: 'app-historico-lista',
  templateUrl: './historico-lista.component.html',
  styleUrls: ['./historico-lista.component.css']
})
export class HistoricoListaComponent implements OnInit {

  dataSource: MatTableDataSource<contatoUsuarioCampanha>;
  colunas: string[] = ['ID', 'NomeFantasia', 'Funcionario', 'Data', 'TipoProposta', 'Status', 'Observacao', 'DataRetorno', 'Acoes'];
  user : usuarioIdFkNavigation;
  func : usuarioIdFkNavigation;

  constructor(public dialogRef: MatDialogRef<HistoricoListaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              private contatoDrogariaService : ContatoDrogariaService,
              private authenticationService: AuthenticationService,
              public vincularFuncionarioDialog: MatDialog,
              public confirmacaoExclusaoDialog: MatDialog,
              private snackBar: MatSnackBar) { 
                this.buscarHistorico(data.drog.idPk)
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
        this.buscarHistorico(drog.idPk);
    })
  }

  buscarHistorico(id: number) {
    return this.contatoDrogariaService.findByDrogariaId(id)
    .subscribe(
      data => {
        if (data.resultado.length == 0)
          this.dialogRef.close();
        const contatosDrogaria = data.resultado as contatoUsuarioCampanha[];
        this.func = contatosDrogaria[0].usuarioIdFkNavigation;
        this.dataSource = new MatTableDataSource<contatoUsuarioCampanha>(contatosDrogaria);
      },
      err => {
        console.log(err);
      }
    )
  }

  excluirContatoDrogaria(contatoDrog: contatoUsuarioCampanha) : void {
    const confirmaExclusaoDialog = this.confirmacaoExclusaoDialog.open(ConfirmacaoExclusaoContatoComponent, {
      data: { contatoDrog }
    });

    confirmaExclusaoDialog.afterClosed().subscribe(result => {
      if (result == true)
        this.buscarHistorico(contatoDrog.idPk)
    });
  }
  
}
