import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/_services';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { funcionario } from 'src/app/_models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  form: FormGroup;
  hide = true;
  selectColor = null;

  constructor(private funcionarioService : FuncionarioService,
              public dialogRef: MatDialogRef<CadastroFuncionarioComponent>,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      corMarcacao: ['', [Validators.required, Validators.minLength(5)]],
      login: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  cadastrar() {
    // if (this.form.invalid) {
    //   this.snackBar.open(
    //     "Dados inválidos", "Ok", { duration: 5000 });
    //   return;
    // }

    // const func: funcionario = this.form.value;
    
    // this.funcionarioService.add(func)
    //   .subscribe(
    //     data => {
    //       this.snackBar.open(
    //         "Funcionário cadastrado com sucesso", "Ok", { duration: 5000 });
    //       this.dialogRef.close(true);
    //       return;
    //     },
    //     err => {
    //       this.snackBar.open(err, "Erro", { duration: 5000 });
    //     }
    //   );
  }

}
