import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/models/api';
import { Card } from 'src/app/models/card';

import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cards: Card[];

  constructor(
    private userCard: CardService,
  ) { }

  ngOnInit(): void {
    this.userCard.getCards().subscribe((resp: Api) => {
      this.cards = resp.items;
    })
  }

  cardStylePosition(id: string) {
    return this.userCard.cardStylePosition(id);
  }

}
