import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NpcnamesComponent } from './npcnames/npcnames.component';
import { NpcserviceService } from './services/npcservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';


const materialModules = [
  CdkTreeModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  MatBadgeModule,
  MatGridListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTooltipModule
];



export class AngularMaterialModule { }
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
	CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
	...materialModules,
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
