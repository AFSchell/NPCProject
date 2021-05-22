import { Component, OnInit, OnDestroy } from '@angular/core';
import { NpcserviceService } from '../services/npcservice.service';
import { NPCData } from '../interfaces/npcdata';
import { NPCName } from '../interfaces/npcname';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-npcnames',
  templateUrl: './npcnames.component.html',
  styleUrls: ['./npcnames.component.css']
})
export class NpcnamesComponent implements OnInit, OnDestroy {

  subscript: Subscription;
  sub2: Subscription;
  names: NPCName[];
  singleNPC: NPCData;

  selectedName: string;

  constructor(private npcService: NpcserviceService) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    //   this.names = this.outNames;
    this.subscript = this.npcService.getNPCNames().subscribe(data => (this.names = data));
  }

  ngOnDestroy(): void {
    this.subscript.unsubscribe();
  }

  printNames(): void {
    for (const index in this.names) {
      if (this.names.hasOwnProperty(index)) {
        console.log('names -->' + this.names[index].name);
      }
    }
  }

  onOptionsSelected(npcname: string): void {
    this.singleNPC = null;
    if (npcname != null && npcname !== '') {
      this.subscript = this.npcService.getNpcData(npcname).subscribe((data: NPCData[]) => { this.singleNPC = data[0]; });
    }
  }

}
