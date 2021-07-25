import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  title = 'NPCDisplayProject';

  constructor(private router: Router) { }

  ngOnInit(): void { }


 showAlert(event: any): void {
// 	alert('Here you go ' + event.tab.textLabel);
   this.showOnClick( event.tab.textLabel );
}
 showOnClick(page: string): void {
    let link: string;
    if (page === 'NPCs') {
      link = 'npcs';
    }
    if (page === 'SpellList') {
      link = 'spells/list';
    }
    if (page === 'Spells') {
      link = 'spells/edit';
    }
    if (page === 'TalentList') {
      link = 'talents/list';
    }
    if (page === 'Talents') {
      link = 'talents/edit';
    }

    this.router.navigateByUrl(link);
  }

}
