import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-litem',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class LitemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {

  }

  myFunc() {
    console.log('child: ' + this.item.id);
  }
}