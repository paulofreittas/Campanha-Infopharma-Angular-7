import { Component, OnInit, Inject } from '@angular/core';

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
import { VincularFuncionarioComponent } from '../vincular-funcionario/vincular-funcionario.component';
// import { Observable } from 'rxjs';
// import { FormControl } from '@angular/forms';
// import { startWith, map } from 'rxjs/operators';

// export interface Estado {
//   abreviacao: string;
// }

export interface DadosDrogaria {
  id: string;
  cnpj: string;
  nomeFantasia: string;
  contato: string;
}

@Component({
  selector: 'app-listagem-drogarias',
  templateUrl: './listagem-drogarias.component.html',
  styleUrls: ['./listagem-drogarias.component.css']
})
export class ListagemDrogariasComponent implements OnInit {

  dataSource: MatTableDataSource<drogaria>;
  colunas: string[] = ['ID', 'RazaoSocial', 'NomeFantasia', 'CNPJ', 'NomeContato', 'Cidade', 'Estado', 'Acoes'];
  totalDrogarias: number;

  // myControl = new FormControl();
  // options: Estado[] = [
  //   {abreviacao: 'AC'},
  //   {abreviacao: 'AL'},
  //   {abreviacao: 'AP'},
  //   {abreviacao: 'AM'},
  //   {abreviacao: 'BA'},
  //   {abreviacao: 'CE'},
  //   {abreviacao: 'DF'},
  //   {abreviacao: 'ES'},
  //   {abreviacao: 'GO'},
  //   {abreviacao: 'MA'},
  //   {abreviacao: 'MT'},
  //   {abreviacao: 'MS'},
  //   {abreviacao: 'MG'},
  //   {abreviacao: 'PA'},
  //   {abreviacao: 'PB'},
  //   {abreviacao: 'PR'},
  //   {abreviacao: 'PE'},
  //   {abreviacao: 'PI'},
  //   {abreviacao: 'RJ'},
  //   {abreviacao: 'RN'},
  //   {abreviacao: 'RS'},
  //   {abreviacao: 'RO'},
  //   {abreviacao: 'RR'},
  //   {abreviacao: 'SC'},
  //   {abreviacao: 'SP'},
  //   {abreviacao: 'SE'},
  //   {abreviacao: 'TO'},
  // ];
  // filteredOptions: Observable<Estado[]>;

  //@ViewChild(MatSelect) matSelect: MatSelect;

  private pagina: number;
  private search: string;
  private semFuncVinculado: boolean;

  constructor(private drogService: DrogariaService, public vincularFuncionarioDialog: MatDialog) { }

  ngOnInit() {
    this.pagina = 0;
    this.search = "";
    this.semFuncVinculado = false;
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith<string | Estado>(''),
    //     map(value => typeof value === 'string' ? value : value.abreviacao),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );

    this.exibirDrogarias();
  }

  // displayFn(estado?: Estado): string | undefined {
  //   return estado ? estado.abreviacao : undefined;
  // }

  // private _filter(estado: string): Estado[] {
  //   const filterValue = estado.toLowerCase();

  //   return this.options.filter(option => option.abreviacao.toLowerCase().indexOf(filterValue) === 0);
  // }

  openDialog(drogariaId: string, cnpj: string, nomeFantasia: string, contato: string): void {
    const dialogRef = this.vincularFuncionarioDialog.open(VincularFuncionarioComponent, {
      data: { id: drogariaId, cnpj: cnpj, nomeFantasia: nomeFantasia, contato: contato }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Resultado');
    })
  }

  paginar(pageEvent: PageEvent) {
    this.pagina = pageEvent.pageIndex;
    this.exibirDrogarias();
  }

  exibirDrogarias() {
    this.drogService.listarDrogarias(this.search, this.semFuncVinculado, this.pagina)
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

  onKey(value: string) {
    if (value.length >= 3)
    {
      this.search = value;
      this.exibirDrogarias();
    }
    else if (value.length == 0)
    {
      this.search = "";
      this.exibirDrogarias();
    } 
  }

  funcionarioVinculado($event)
  {
    this.semFuncVinculado = $event.checked;
    this.exibirDrogarias();
  }

}
