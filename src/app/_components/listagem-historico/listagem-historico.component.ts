import { Component, OnInit } from '@angular/core';
import { contatoDrogaria, funcionario } from 'src/app/_models';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { ContatoDrogariaService, AuthenticationService } from 'src/app/_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listagem-historico',
  templateUrl: './listagem-historico.component.html',
  styleUrls: ['./listagem-historico.component.css']
})
export class ListagemHistoricoComponent implements OnInit {

  dataSource: MatTableDataSource<contatoDrogaria>;
  colunas: string[] = ['DataAlteracao', 'NomeFantasia', 'CNPJ', 'Proposta', 'Situacao', 'UltObservacao', 'Acoes'];
  user : funcionario;
  totalContatoDrogarias : number;
  private pagina: number;
  private search: string;

  constructor(private contatoDrogService: ContatoDrogariaService, private authenticationService: AuthenticationService) { 
    
  }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.pagina = 0;
    this.search = "";
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
    this.contatoDrogService.findByFuncionarioId(this.user.id, this.search, this.pagina)
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

}
