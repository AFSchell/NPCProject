import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NpcnamesComponent } from './npcnames/npcnames.component';
import { NpcserviceService } from './services/npcservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NpcnamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NpcserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
