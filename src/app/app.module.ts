import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NrsContactCardComponent } from './nrs-contact-card/nrs-contact-card.component';

@NgModule({
  declarations: [
    NrsContactCardComponent // Required for elements:
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    NrsContactCardComponent // Required for elements:
  ],
  entryComponents: [
    NrsContactCardComponent // Required for elements:
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    // Required for elements: This allows us to byass app-module component and use our
    // elements components directly in html
    const el = createCustomElement(NrsContactCardComponent, { injector: this.injector });
    customElements.define('nrs-contact-card', el);
  }
}
