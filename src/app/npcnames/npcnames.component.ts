import { Component, OnInit, Input } from '@angular/core';
import { NpcserviceService } from '../services/npcservice.service';
import { NPCData } from '../interfaces/npcdata';
import { NPCName } from '../interfaces/npcname';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-npcnames',
  templateUrl: './npcnames.component.html',
  styleUrls: ['./npcnames.component.css']
})
export class NpcnamesComponent implements OnInit {

  @Input() names: Observable<NPCName>;
  npcData: Observable<NPCData>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void { }

  printNames(): void {
    for (const index in this.names) {
      if (this.names.hasOwnProperty(index)) {
        console.log('names -->' + this.names[index].name);
      }
    }
  }

  onOptionsSelected(npcname: string): void {
    this.getNPCData(npcname);
  }

  getNPCData(npcname: string): void {
    if (npcname != null && npcname !== '') {
      this.http.get('http://localhost:8080/getNPC?name=' + npcname).subscribe(
        (data: Observable<NPCData>) => { this.npcData = data[0]; console.log(this.npcData); });
    } else {
      this.npcData = null;
    }

  }
}
