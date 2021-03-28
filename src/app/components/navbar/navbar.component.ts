import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  diplayMenu: string = 'close-menu';
  constructor() { }

  Clickmenu($event: any) {
    $event.preventDefault()
    if (this.diplayMenu !== 'close-menu')
      this.diplayMenu = 'close-menu';
    else
      this.diplayMenu = 'app-menu';    
        console.log($event)
  }

  ngOnInit(): void {
  }

}
