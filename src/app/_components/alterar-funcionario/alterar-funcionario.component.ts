import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/_services';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { funcionario } from 'src/app/_models';

@Component({
  selector: 'app-alterar-funcionario',
  templateUrl: './alterar-funcionario.component.html',
  styleUrls: ['./alterar-funcionario.component.css']
})
export class AlterarFuncionarioComponent implements OnInit {

  form: FormGroup;
  hide = true;
  private func : funcionario;

  constructor(private funcionarioService : FuncionarioService,
              public dialogRef: MatDialogRef<AlterarFuncionarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.func = null;
    this.buscarFuncionario(this.data.id);
    this.gerarForm();
  }

  buscarFuncionario(id: number)
  {
    this.funcionarioService.findByFuncionarioId(id)
    .subscribe(
      data => {
        const dado = data as funcionario;
        this.func = dado;
      },
      err => {
        this.snackBar.open(err, "Erro", { duration: 5000 });
        return;
      }
    );
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      corMarcacao: ['', [Validators.required, Validators.minLength(5)]],
      login: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  alterar(id : number) {
    if (this.form.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Ok", { duration: 5000 });
      return;
    }

    this.func = this.form.value;
    this.func.id = id;
    
    this.funcionarioService.update(this.func)
      .subscribe(
        data => {
          this.snackBar.open(
            "Dados atualizados com sucesso", "Ok", { duration: 5000 });
          this.dialogRef.close(true);
          return;
        },
        err => {
          this.snackBar.open(err, "Erro", { duration: 5000 });
        }
      );
  }

}
