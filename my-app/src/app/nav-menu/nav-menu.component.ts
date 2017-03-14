import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  myList = [
    {id:1, txt: 'Button1'},
    {id:2, txt: 'Button2'},
    {id:3, txt: 'Button3'},
    {id:4, txt: 'Button4'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
