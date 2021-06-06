import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NpcserviceService } from '../services/npcservice.service';
import { NPCData } from '../interfaces/npcdata';
import { NPCName } from '../interfaces/npcname';
import { ServiceInterface } from '../interfaces/serviceinterface';

@Component({
  selector: 'app-npcnames',
  templateUrl: './npcnames.component.html',
  styleUrls: ['./npcnames.component.css']
})
export class NpcnamesComponent implements OnInit, OnDestroy {

  subscript: Subscription;
  sub2: Subscription;
  names: NPCName[] = [];
  singleNPC: NPCData;
  npcData: NPCData[] = [];
  returnData: ServiceInterface;

  selectedName: string;

  constructor(private npcService: NpcserviceService) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    console.log(' nginit start' );
    this.subscript = this.npcService.getNPCNames().subscribe((data: ServiceInterface) => {
      for (let i = 0; i < data.data.length; i++) {
        this.names[i] = JSON.parse(JSON.stringify(data.data[i]));
        console.log(this.names[i]);
      }
    });
    console.log(' nginit end' );
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

  onListNpcs(): void {
    this.subscript = this.npcService.getNpcData('').
      subscribe((returnedData: ServiceInterface) => {
        for (let i = 0; i < returnedData.data.length; i++) {
          this.npcData[i] = JSON.parse(JSON.stringify(returnedData.data[i]));
        }
      });

  }

  onOptionsSelected(npcname: string): void {

    if (npcname != null && npcname !== '') {
      this.subscript = this.npcService.getNpcData(npcname).
        subscribe((returnedData: ServiceInterface) => {
          this.singleNPC = JSON.parse(JSON.stringify(returnedData.data[0]));
        });
    }
  }

}
