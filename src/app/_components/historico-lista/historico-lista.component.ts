import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatTableDataSource } from '@angular/material';
import { drogaria, contatoDrogaria } from 'src/app/_models';
import { ContatoDrogariaService } from 'src/app/_services';

@Component({
  selector: 'app-historico-lista',
  templateUrl: './historico-lista.component.html',
  styleUrls: ['./historico-lista.component.css']
})
export class HistoricoListaComponent implements OnInit {

  dataSource: MatTableDataSource<contatoDrogaria>;
  colunas: string[] = ['ID', 'NomeFantasia', 'Funcionario', 'Data', 'TipoProposta', 'Status', 'Observacao'];

  constructor(public dialogRef: MatDialogRef<HistoricoListaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: drogaria, 
              private contatoDrogariaService : ContatoDrogariaService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
