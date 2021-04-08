import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../models/api';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor( 
    private http: HttpClient
  ) { }

  public getCards():Observable<Api>{
    return this.http.get<Api>(environment.apiRest.cards);
  };

  public cardStylePosition(id:string){
    if(Number(id)%2==1)
    return  'flex-lg-row-reverse flex-xl-row-reverse'
    return '';
  }

}
