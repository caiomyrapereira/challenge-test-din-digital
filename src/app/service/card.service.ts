import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arr } from '../models/arr';


@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor( 
    private http: HttpClient
  ) { }

  public getCards():Observable<Arr>{
    return this.http.get<Arr>('https://6059fb9db11aba001745d43f.mockapi.io/api/v1/cards');
  }

}
