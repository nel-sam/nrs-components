import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NrsContactCardComponent } from './nrs-contact-card/nrs-contact-card.component';

@NgModule({
  declarations: [
    NrsContactCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NrsContactCardComponent],
  entryComponents: [
    NrsContactCardComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const el = createCustomElement(NrsContactCardComponent, { injector: this.injector });
    customElements.define('nrs-contact-card', el);
  }
}
