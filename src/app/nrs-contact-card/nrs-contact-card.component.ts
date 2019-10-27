import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'nrs-contact-card',
  templateUrl: './nrs-contact-card.component.html',
  styleUrls: [ './nrs-contact-card.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom // Required for elements: Makes CSS into JS
})
export class NrsContactCardComponent implements OnInit {

  // TODO: There's currently a bug that prevents input from working at all.
  // Continue on this project once that bug was been resolved
  @Input() public name: string = '';

  constructor() {
  }

  ngOnInit() {
  }
}
