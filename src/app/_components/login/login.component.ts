import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { funcionario, usuarioIdFkNavigation } from '../../_models';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  nameBtn: string;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.gerarForm();
    this.nameBtn = "Entrar";
  }

  gerarForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  logar() {
    this.nameBtn = "Aguarde ...";
    if (this.form.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Ok", { duration: 5000 });
      this.nameBtn = "Entrar";
      return;
    }

    const func: usuarioIdFkNavigation = this.form.value;
    
    this.authenticationService.logar(func.username, func.password)
      .subscribe(
        data => {
          this.router.navigateByUrl("/dashboard");
        },
        err => {
          this.snackBar.open(err, "Erro", { duration: 5000 });
        }
      );
      this.nameBtn = "Entrar";  
    //
    //alert(JSON.stringify(func));
  }

}
