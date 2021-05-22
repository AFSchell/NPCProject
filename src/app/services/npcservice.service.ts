import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NPCData } from '../interfaces/npcdata';
import { NPCName } from '../interfaces/npcname';

@Injectable({
  providedIn: 'root'
})

export class NpcserviceService {

  npcNamesURL = '/getNPCNames';
  npcHost = 'localhost:8080';

  names: string[];

  constructor(private http: HttpClient) { }

  getNPCNames(): Observable<NPCName[]> {
    console.log('trying to get name from service');
    return this.http.get<NPCName[]>('http://localhost:8080/getNPCNames');
  }

  getNpcData(npcname: string): Observable<NPCData[]> {
    let outNames: Observable<NPCData[]>;
    outNames = null;
    if (npcname != null && npcname !== '') {
      outNames = this.http.get<NPCData[]>('http://localhost:8080/getNPC?name=' + npcname);
    }
    return outNames;
  }

}
