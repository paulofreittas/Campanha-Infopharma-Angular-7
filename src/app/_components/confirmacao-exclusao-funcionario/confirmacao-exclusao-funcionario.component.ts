import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FuncionarioService } from 'src/app/_services';

@Component({
  selector: 'app-confirmacao-exclusao-funcionario',
  templateUrl: './confirmacao-exclusao-funcionario.component.html',
  styleUrls: ['./confirmacao-exclusao-funcionario.component.css']
})
export class ConfirmacaoExclusaoFuncionarioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmacaoExclusaoFuncionarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private funcionarioService : FuncionarioService,
              private snackBar: MatSnackBar) { }

  ngOnInit() { }

  onClose(registroExcluido: boolean) {
    this.dialogRef.close(registroExcluido);
  }

  excluir() {
    if (JSON.parse(localStorage.getItem('infopharmaUser')).idPk == this.data.func.idPk)
    {
      this.snackBar.open("Você não pode excluir o usuário logado", "Erro", { duration: 5000 });
      this.onClose(false);
    }
    else {
      this.funcionarioService.delete(this.data.func.idPk)
        .subscribe(
        data => {
          this.snackBar.open("Funcionário excluído com sucesso!", "Ok", { duration: 5000 });
          this.onClose(true);
        },
        err => {
          this.snackBar.open(err, "Erro", { duration: 5000 });
          this.onClose(false);
        }
      ) 
    }
    
  }

}
