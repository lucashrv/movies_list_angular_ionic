import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  private apiUrl = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

  constructor(private http: HttpClient) { }

  convertToBRL(value: number): Observable<number> {
    return this.http.get<{ USDBRL: { bid: string } }>(this.apiUrl).pipe(
      map((data) => {
        const brlRate = parseFloat(data.USDBRL.bid);
        return value * brlRate;
      })
    );
  }
}
