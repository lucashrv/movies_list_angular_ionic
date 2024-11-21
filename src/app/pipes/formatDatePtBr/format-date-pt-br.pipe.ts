import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDatePtBr',
  standalone: true
})
export class FormatDatePtBrPipe implements PipeTransform {

  transform(value: string): string {
    // GMT-0300
    const date = new Date(value + 'T03:00:00Z');

    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }

    return date.toLocaleDateString('pt-BR');
  }

}
