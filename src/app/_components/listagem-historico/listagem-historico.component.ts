import { Component, OnInit } from '@angular/core';
import { contatoDrogaria, drogaria, usuarioIdFkNavigation } from '../../_models';
import { MatTableDataSource, PageEvent, MatDialog } from '@angular/material';
import { ContatoDrogariaService, AuthenticationService } from '../../_services';
import { Observable } from 'rxjs';
import { HistoricoListaComponent } from '../../_components';
import { Status } from '../../_interfaces';

@Component({
  selector: 'app-listagem-historico',
  templateUrl: './listagem-historico.component.html',
  styleUrls: ['./listagem-historico.component.css']
})
export class ListagemHistoricoComponent implements OnInit {

  dataSource: MatTableDataSource<contatoDrogaria>;
  colunas: string[] = ['DataAlteracao', 'NomeFantasia', 'CNPJ', 'Proposta', 'Situacao', 'UltObservacao', 'DataRetorno', 'Acoes'];
  user : usuarioIdFkNavigation;
  totalContatoDrogarias : number;
  private pagina: number;
  private search: string;
  private statusValue: number;

  status: Status[] = [
    {value: 0, viewValue: 'Todos'},
    {value: 1, viewValue: 'Recusado'},
    {value: 2, viewValue: 'Proposta enviada'},
    {value: 3, viewValue: 'Entrar em contato depois'}
  ];

  constructor(private contatoDrogService: ContatoDrogariaService, 
              private authenticationService: AuthenticationService,
              public historicoListaDialog: MatDialog) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.pagina = 0;
    this.search = "";
    this.statusValue = 0;
    this.buscarHistoricoContatos();
  }

  changeFilter($event) {
    this.statusValue = $event;
    this.buscarHistoricoContatos();
  }

  paginar(pageEvent: PageEvent) {
    this.pagina = pageEvent.pageIndex;
    this.buscarHistoricoContatos();
  }

  onKey(value: string) {
    if (value.length >= 3)
    {
      this.search = value;
      this.buscarHistoricoContatos();
    }
    else if (value.length == 0)
    {
      this.search = "";
      this.buscarHistoricoContatos();
    } 
  }

  buscarHistoricoContatos() {
    this.contatoDrogService.findByFuncionarioId(this.user.idPk, this.statusValue, this.search, this.pagina)
    .subscribe(
      data => {
        this.totalContatoDrogarias = data.numeroResultados;
        const contatosDrogaria = data.resultado as contatoDrogaria[];
        this.dataSource = new MatTableDataSource<contatoDrogaria>(contatosDrogaria);
      },
      err => {
        console.log(err);
      }
    )
  }

  openHistoricoDialog(drog: drogaria): void {
    const dialogRef = this.historicoListaDialog.open(HistoricoListaComponent, {
      data: { drog },
      minWidth: 1300
    });

    dialogRef.afterClosed().subscribe(result => {
        this.buscarHistoricoContatos();
    })
  }

}
