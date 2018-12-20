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

  constructor(private funcionarioService : FuncionarioService,
              public dialogRef: MatDialogRef<CadastroFuncionarioComponent>,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

}
