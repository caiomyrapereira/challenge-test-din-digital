import { Component, OnInit } from '@angular/core';
import { Arr } from 'src/app/models/arr';

import {CardService} from '../../service/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public arr: Arr;

  constructor(
    private userCard: CardService,
  ) { }

  ngOnInit(): void {
     this.userCard.getCards().subscribe((resp:Arr)=>{
       this.arr = resp;
     })
  }

  cardStylePosition(id:string){
    if(Number(id)%2==1)
    return  'flex-lg-row-reverse flex-xl-row-reverse'
    return '';
  }

}
