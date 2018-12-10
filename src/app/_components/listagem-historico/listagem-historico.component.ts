import { Component, OnInit } from '@angular/core';
import { contatoDrogaria, funcionario } from 'src/app/_models';
import { MatTableDataSource } from '@angular/material';
import { ContatoDrogariaService, AuthenticationService } from 'src/app/_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listagem-historico',
  templateUrl: './listagem-historico.component.html',
  styleUrls: ['./listagem-historico.component.css']
})
export class ListagemHistoricoComponent implements OnInit {

  dataSource: MatTableDataSource<contatoDrogaria>;
  colunas: string[] = ['ID', 'NomeFantasia', 'CNPJ', 'Proposta', 'Situacao', 'UltObservacao', 'Acoes'];
  user : funcionario;

  constructor(private contatoDrogService: ContatoDrogariaService, private authenticationService: AuthenticationService) { 
    
  }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.buscarHistoricoContatos();
  }

  buscarHistoricoContatos() {
    this.contatoDrogService.findByFuncionarioId(this.user.id)
    .subscribe(
      data => {
        const contatosDrogaria = data as contatoDrogaria[];
        this.dataSource = new MatTableDataSource<contatoDrogaria>(contatosDrogaria);
      },
      err => {
        console.log(err);
      }
    )
  }

}
