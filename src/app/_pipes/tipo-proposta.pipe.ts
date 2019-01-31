import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoProposta'
})
export class TipoPropostaPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return this.obterTexto(value);
  }

  obterTexto(value: number) : string {
    var texto: string;
    switch (value) {
      case 0:
        texto = "Sim Multi";
        break;
      case 1:
        texto = "Sim Multi + Documentação";
        break;
      case 2:
        texto = "PBM";
        break;
      default:
        texto = "Erro"
        break;
    }

    return texto;
  }

}
