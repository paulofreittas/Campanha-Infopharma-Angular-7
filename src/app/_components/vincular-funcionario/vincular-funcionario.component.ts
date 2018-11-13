import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DadosDrogaria } from '../listagem-drogarias';

import * as moment from 'moment';

export interface Proposta {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-vincular-funcionario',
  templateUrl: './vincular-funcionario.component.html',
  styleUrls: ['./vincular-funcionario.component.css']
})
export class VincularFuncionarioComponent implements OnInit {

  proposta: Proposta[] = [
    {value: 1, viewValue: 'Sim Multi'},
    {value: 2, viewValue: 'PBM'},
    {value: 3, viewValue: 'Sim Multi + PBM'}
  ];

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
