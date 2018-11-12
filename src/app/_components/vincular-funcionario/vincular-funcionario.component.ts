import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DadosDrogaria } from '../listagem-drogarias';

import * as moment from 'moment';

export interface TipoContrato {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-vincular-funcionario',
  templateUrl: './vincular-funcionario.component.html',
  styleUrls: ['./vincular-funcionario.component.css']
})
export class VincularFuncionarioComponent implements OnInit {

  // tipoContrato: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];

  private dataAtual: string;

  constructor(public dialogRef: MatDialogRef<VincularFuncionarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DadosDrogaria) { }

  ngOnInit() {
    this.dataAtual = moment().format('DD/MM/YYYY');
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
