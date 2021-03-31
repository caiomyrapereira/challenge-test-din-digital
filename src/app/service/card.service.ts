import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../models/api';


@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor( 
    private http: HttpClient
  ) { }

  public getCards():Observable<Api>{
    return this.http.get<Api>('https://6059fb9db11aba001745d43f.mockapi.io/api/v1/cards');
  };

  public cardStylePosition(id:string){
    if(Number(id)%2==1)
    return  'flex-lg-row-reverse flex-xl-row-reverse'
    return '';
  }

}
