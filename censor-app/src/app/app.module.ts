import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { OutputFormComponent } from './output-form/output-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentFormComponent,
    OutputFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
