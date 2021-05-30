import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NpcnamesComponent } from './npcnames/npcnames.component';
import { NpcserviceService } from './services/npcservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';

import { SpellsComponent } from './spells/spells.component';
import { TalentsComponent } from './talents/talents.component';
import { TalenteditComponent } from './talents/talentedit/talentedit.component';
import { SpelleditComponent } from './spells/spelledit/spelledit.component';
import { TalentlistComponent } from './talents/talentlist/talentlist.component';
import { SpelllistComponent } from './spells/spelllist/spelllist.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const appRoutes: Routes = [
//  { path: '', component: HomeScreenComponent },
  { path: 'npcs', component: NpcnamesComponent },
  { path: 'talents', component: TalentsComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'talents/edit', component: TalenteditComponent },
  { path: 'talents/list', component: TalentlistComponent },
  { path: 'spells/edit', component: SpelleditComponent },
  { path: 'spells/list', component: SpelllistComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NpcnamesComponent,
    SpellsComponent,
    TalentsComponent,
    TalenteditComponent,
    SpelleditComponent,
    TalentlistComponent,
    SpelllistComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [NpcserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
