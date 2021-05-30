import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'NPCDisplayProject';

  constructor(private router: Router) { }

  ngOnInit(): void { }

 showOnClick(page: string): void {
    let link: string;
    if (page === 'NPCList') {
      link = 'npcs';
    }
    if (page === 'SpellList') {
      link = 'spells/list';
    }
    if (page === 'SpellEdit') {
      link = 'spells/edit';
    }
    if (page === 'TalentList') {
      link = 'talents/list';
    }
    if (page === 'TalentEdit') {
      link = 'talents/edit';
    }

    this.router.navigateByUrl(link);
  }

}
