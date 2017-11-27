import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NodeComponentComponent } from './node-component/node-component.component';
import { NodeDataFormComponent } from './node-data-form/node-data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponentComponent,
    NodeDataFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
