import { Component, OnInit } from '@angular/core';
import { Cow } from './cow';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css']
})
export class CowComponent implements OnInit {
  cows: Cow[];
  constructor() { }

  ngOnInit() {
  }

}
