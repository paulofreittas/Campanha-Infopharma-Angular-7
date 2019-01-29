import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uf'
})
export class UfPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return this.obterTexto(value);
  }

  obterTexto(value: number) : string {
    var texto: string;
    switch (value) {
      case 0:
        texto = "AC";
        break;
      case 1:
        texto = "AL";
        break;
      case 2:
        texto = "AM";
        break;
      case 3:
        texto = "AP";
        break;
      case 4:
        texto = "BA";
        break;
      case 5:
        texto = "CE";
        break;
      case 6:
        texto = "DF";
        break;
      case 7:
        texto = "ES";
        break;
      case 8:
        texto = "GO";
        break;
      case 9:
        texto = "MA";
        break;
      case 10:
        texto = "MG";
        break;
      case 11:
        texto = "MS";
        break;
      case 12:
        texto = "MT";
        break;
      case 13:
        texto = "PA";
        break;
      case 14:
        texto = "PB";
        break;
      case 15:
        texto = "PE";
        break;
      case 16:
        texto = "PI";
        break;
      case 17:
        texto = "PR";
        break;
      case 18:
        texto = "RJ";
        break;
      case 19:
        texto = "RN";
        break;
      case 20:
        texto = "RO";
        break;
      case 21:
        texto = "RR";
        break;
      case 22:
        texto = "RS";
        break;
      case 23:
        texto = "SC";
        break;
      case 24:
        texto = "SE";
        break;
      case 25:
        texto = "SP";
        break;
      case 26:
        texto = "TO";
        break;
      default:
        texto = "Desconhecido"
        break;
    }
    return texto;
  }

}
