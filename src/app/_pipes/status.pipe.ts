import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return this.obterTexto(value);
  }

  obterTexto(value: number) : string {
    var texto: string;
    switch (value) {
      case 0:
        texto = "Recusado";
        break;
      case 1:
        texto = "Proposta enviada";
        break;
      case 2:
        texto = "Entrar em contato depois";
        break;
      default:
        texto = "Erro"
        break;
    }

    return texto;
  }

}
