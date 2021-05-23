import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NpcnamesComponent } from './npcnames/npcnames.component';
import { NpcserviceService } from './services/npcservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpellsComponent } from './spells/spells.component';
import { TalentsComponent } from './talents/talents.component';

const appRoutes: Routes = [
  { path: 'npcs', component: NpcnamesComponent },
  { path: 'talents', component: TalentsComponent },
  { path: 'spells', component: SpellsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NpcnamesComponent,
    SpellsComponent,
    TalentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [NpcserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
