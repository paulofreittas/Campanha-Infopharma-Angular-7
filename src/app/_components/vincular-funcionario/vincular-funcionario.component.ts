import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import * as moment from 'moment';
import { drogaria, contatoDrogaria } from 'src/app/_models';
import { ContatoDrogariaService } from 'src/app/_services';

export interface Proposta {
  value: number;
  viewValue: string;
}

export interface Status {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-vincular-funcionario',
  templateUrl: './vincular-funcionario.component.html',
  styleUrls: ['./vincular-funcionario.component.css']
})
export class VincularFuncionarioComponent implements OnInit {

  registroAlterado: boolean;

  proposta: Proposta[] = [
    {value: 0, viewValue: 'Sim Multi'},
    {value: 1, viewValue: 'PBM'},
    {value: 2, viewValue: 'Sim Multi + PBM'}
  ];

  status: Status[] = [
    {value: 0, viewValue: 'Recusado'},
    {value: 1, viewValue: 'Proposta enviada'},
    {value: 2, viewValue: 'Contrato assinado'},
    {value: 3, viewValue: 'Entrar em contato depois'}
  ];

  public dataAtual: string;

  constructor(public dialogRef: MatDialogRef<VincularFuncionarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              private contatoDrogariaService : ContatoDrogariaService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataAtual = moment().format('DD/MM/YYYY');
    this.registroAlterado = false;
  }

  onClose(): void {
    this.dialogRef.close(this.registroAlterado);
  }

  vincularFuncionario(drog: drogaria, proposta: number, status: number, observacao: string)
  {
    drog.funcionario = JSON.parse(localStorage.getItem('infopharmaUser'));
    drog.funcionarioIdFk = drog.funcionario.id;

    var ctDrogaria = new contatoDrogaria();

    ctDrogaria.drogaria = drog;
    ctDrogaria.drogariaIdFk = drog.id;
    ctDrogaria.tipoProposta = proposta;
    ctDrogaria.status = status;
    ctDrogaria.observacao = observacao;

    this.contatoDrogariaService.add(ctDrogaria).subscribe(
      data => {
        this.snackBar.open("Contato registrado com sucesso!", "Ok", { duration: 5000 });
        this.registroAlterado = true;
        this.onClose();
      },
      err => {
        this.snackBar.open(err, "Erro", { duration: 5000 });
        this.onClose();
      }
    )    
  }

}
