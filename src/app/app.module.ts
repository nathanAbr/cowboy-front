import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { HerdComponent } from './herd/herd.component';
import { CowComponent } from './cow/cow.component';
import { FarmingComponent } from './farming/farming.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    HerdComponent,
    CowComponent,
    FarmingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
