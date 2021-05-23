import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NpcnamesComponent } from './npcnames/npcnames.component';
import { NpcserviceService } from './services/npcservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [
  { path: 'npcs', component: NpcnamesComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NpcnamesComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [NpcserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
