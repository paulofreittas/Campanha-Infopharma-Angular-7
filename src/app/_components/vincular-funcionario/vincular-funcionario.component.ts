import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DadosDrogaria } from '../listagem-drogarias';

@Component({
  selector: 'app-vincular-funcionario',
  templateUrl: './vincular-funcionario.component.html',
  styleUrls: ['./vincular-funcionario.component.css']
})
export class VincularFuncionarioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VincularFuncionarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DadosDrogaria) { }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
