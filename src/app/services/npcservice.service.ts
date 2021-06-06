import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServiceInterface } from '../interfaces/serviceinterface';

@Injectable({
  providedIn: 'root'
})

export class NpcserviceService {

  constructor(private http: HttpClient) { }

  getNPCNames(): Observable<ServiceInterface> {
    return this.http.get<any>('http://localhost:8080/getNPCNames');
  }

  getNpcData(npcname: string): Observable<ServiceInterface> {

    let url = 'http://localhost:8080/getNPC';

    if (npcname != null && npcname !== '') {
      url = url + '?name=' + npcname;
    }

    return this.http.get<any>(url);
  }

}
