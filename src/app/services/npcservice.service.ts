import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NPCData } from '../interfaces/npcdata';
import { NPCName } from '../interfaces/npcname';
import { ServiceInterface } from '../interfaces/serviceinterface';

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

  getNpcData(npcname: string): Observable<any> {

    let returnValue: any;

    if (npcname != null && npcname !== '') {
      returnValue = this.http.get<any>('http://localhost:8080/getNPC?name=' + npcname);
    }

    return returnValue;
  }


  /*   getNpcData(npcname: string): Observable<ServiceInterface[]> {
      //    let outNames: Observable<NPCData[]>;
      //    outNames = null;
      let serviceBack: Observable<ServiceInterface[]>;
      if (npcname != null && npcname !== '') {
        serviceBack = this.http.get<ServiceInterface[]>('http://localhost:8080/getNPC?name=' + npcname);
        //      outNames = this.http.get<NPCData[]>('http://localhost:8080/getNPC?name=' + npcname);
      }
      return serviceBack;
    }
   */
}
