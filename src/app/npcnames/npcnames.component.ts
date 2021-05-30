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
  names: NPCName[];
  singleNPC: NPCData;
  returnData: ServiceInterface;

  selectedName: string;

  constructor(private npcService: NpcserviceService) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
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
    //    let npcs: NPCData[];

    let stringObject: string;
    let parsedObject: NPCData;
    if (npcname != null && npcname !== '') {
      this.subscript = this.npcService.getNpcData(npcname).
        subscribe((stuff: any) => {
          console.log('stuff came back');
          console.log('stuff -> ' + stuff);
          stringObject = JSON.stringify(stuff);
          console.log('stringObject --> ' + stringObject);
          this.returnData = stuff as ServiceInterface;
          console.log('data --> ' + JSON.stringify(this.returnData.data[0]));
          parsedObject = JSON.parse(JSON.stringify(this.returnData.data[0]));
          console.log( 'parsedObject --> ' + parsedObject.name + '  ST: ' + parsedObject.st );
          /*
          stringObject = JSON.parse(stuff);
          */
          //         npcs = stuff[0].data as NPCData[];
          //       this.singleNPC = npcs[0]; console.log(this.singleNPC);
        });
    }
  }
}
