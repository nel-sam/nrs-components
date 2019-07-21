import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nrs-contact-card',
  templateUrl: './nrs-contact-card.component.html',
  styleUrls: [
    './nrs-contact-card.component.scss'
  ],
  encapsulation: ViewEncapsulation.ShadowDom // Required for elements: Makse CSS into JS
})
export class NrsContactCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
