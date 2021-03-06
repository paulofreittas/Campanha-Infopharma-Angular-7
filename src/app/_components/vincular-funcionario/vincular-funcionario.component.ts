import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import * as moment from 'moment';
import { drogaria, contatoDrogaria, funcionario, usuarioIdFkNavigation } from 'src/app/_models';
import { ContatoDrogariaService } from 'src/app/_services';
import { contatoUsuarioCampanha } from '../../_models';
import { Status } from '../../_interfaces';

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

  registroAlterado: boolean;

  proposta: Proposta[] = [
    {value: 0, viewValue: 'Sim Multi'},
    {value: 1, viewValue: 'Sim Multi + Documentação'},
    {value: 2, viewValue: 'PBM'}
  ];

  status: Status[] = [
    {value: 1, viewValue: 'Recusado'},
    {value: 2, viewValue: 'Proposta enviada'},
    {value: 3, viewValue: 'Entrar em contato depois'}
  ];

  public dataAtual: string;
  public ctDrogaria : contatoUsuarioCampanha;
  public user : usuarioIdFkNavigation;
  public mask: Array<string | RegExp>;

  constructor(public dialogRef: MatDialogRef<VincularFuncionarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              private contatoDrogariaService : ContatoDrogariaService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataAtual = moment().format('DD/MM/YYYY');
    this.registroAlterado = false;
    this.mask = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[2]/, /[0]/, /[0-9]/, /[0-9]/]

    this.user = JSON.parse(localStorage.getItem('infopharmaUser'));

    this.ctDrogaria = new contatoUsuarioCampanha();
  }

  onClose(): void {
    this.dialogRef.close(this.registroAlterado);
  }

  vincularFuncionario(drog: drogaria, proposta: number, status: number, observacao: string)
  {
    this.ctDrogaria.clienteIdFk = drog.idPk;
    this.ctDrogaria.tipoProposta = proposta;
    this.ctDrogaria.status = status;
    this.ctDrogaria.usuarioIdFk = this.user.idPk;
    this.ctDrogaria.observacao = observacao;
    if (this.ctDrogaria.dataRetorno != null)
      this.ctDrogaria.dataRetorno = new Date(moment(this.ctDrogaria.dataRetorno.toString().split('/').join('-'), "DD-MM-YYYY").format());
    this.contatoDrogariaService.add(this.ctDrogaria).subscribe(
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
