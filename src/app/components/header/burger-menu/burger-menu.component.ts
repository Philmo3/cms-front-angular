import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  burgerIsOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openOrClose(openOrClose: boolean){
    this.burgerIsOpen = openOrClose
  }

}
