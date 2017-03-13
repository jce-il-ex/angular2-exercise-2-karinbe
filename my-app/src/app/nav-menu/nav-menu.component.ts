import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
 buttons = [
              { id: "home", txt: "Home" }, 
              { id: "page1", txt: "Page 1" },     
              { id: "about", txt: "About" },     
              { id: "contact", txt: "Contact Us" }
            ]
  constructor() { }

  ngOnInit() {
  }

}
