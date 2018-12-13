import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { drogaria, contatoDrogaria } from 'src/app/_models';
import { ContatoDrogariaService } from 'src/app/_services';

@Component({
  selector: 'app-confirmacao-exclusao-contato',
  templateUrl: './confirmacao-exclusao-contato.component.html',
  styleUrls: ['./confirmacao-exclusao-contato.component.css']
})
export class ConfirmacaoExclusaoContatoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmacaoExclusaoContatoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              private contatoDrogariaService : ContatoDrogariaService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onClose(registroExcluido: boolean) {
    this.dialogRef.close(registroExcluido);
  }

  excluir() {
    this.contatoDrogariaService.delete(this.data.contatoDrog.id)
    .subscribe(
      data => {
        this.snackBar.open("Contato excluído com sucesso!", "Ok", { duration: 5000 });
        this.onClose(true);
      },
      err => {
        this.snackBar.open(err, "Erro", { duration: 5000 });
        this.onClose(false);
      }
    ) 
  }

}
