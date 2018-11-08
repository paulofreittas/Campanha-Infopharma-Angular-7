import { Component, OnInit, ViewChild } from '@angular/core';

import { 
  MatSelect, 
  MatTableDataSource,
  MatSnackBar,
  MatDialog, 
  MatDialogRef, 
  MAT_DIALOG_DATA,
  PageEvent,
  Sort
} from '@angular/material';

import { DrogariaService } from '../../_services';
import { drogaria } from '../../_models';

@Component({
  selector: 'app-listagem-drogarias',
  templateUrl: './listagem-drogarias.component.html',
  styleUrls: ['./listagem-drogarias.component.css']
})
export class ListagemDrogariasComponent implements OnInit {

  dataSource: MatTableDataSource<drogaria>;
  colunas: string[] = ['ID', 'RazaoSocial', 'NomeFantasia', 'CNPJ', 'NomeContato', 'Cidade', 'Estado'];
  totalDrogarias: number;

  @ViewChild(MatSelect) matSelect: MatSelect;

  private pagina: number;

  constructor(private drogService: DrogariaService) { }

  ngOnInit() {
    this.pagina = 0;

    this.exibirDrogarias();
  }

  paginar(pageEvent: PageEvent) {
    this.pagina = pageEvent.pageIndex;
    this.exibirDrogarias();
  }

  exibirDrogarias() {
    this.drogService.listarTodasDrogarias(this.pagina)
    .subscribe(
      data => {
        this.totalDrogarias = data.numeroResultados;
        const drogarias = data.resultado as drogaria[];
        this.dataSource = new MatTableDataSource<drogaria>(drogarias);
      },
      err => {
        console.log(err);
      }
    )
  }

}
