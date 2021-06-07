import { Component, OnInit } from '@angular/core';
import { SpellData } from '../../interfaces/spelldata';

@Component({
  selector: 'app-spelledit',
  templateUrl: './spelledit.component.html',
  styleUrls: ['./spelledit.component.css']
})
export class SpelleditComponent implements OnInit {

  spellId: string = '';
  spellData: SpellData;

  id: string;
  name: string;
  description: string;
  iq: string;
  prereq: string[];

  bAdding: boolean = true;
  bEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('spellId --> ' + this.spellId);
  }

  fetchSpell(spellId: string): void {
    this.spellId = spellId;
    console.log(this.spellId);
  }

  addSpell(spellId: string): void {
    this.spellId = spellId;
    console.log(this.spellId);
  }

  idEntered(): void {
    if (this.spellId.length > 0) {
      this.bEditing = true;
      this.bAdding = false;
    } else {
      this.bEditing = false;
      this.bAdding = true;
    }
  }
}
