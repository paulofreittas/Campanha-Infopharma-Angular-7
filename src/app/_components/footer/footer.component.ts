import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private dataAtual: string;

  constructor() { }

  ngOnInit() {
    this.dataAtual = new Date().toDateString();
  }

}
