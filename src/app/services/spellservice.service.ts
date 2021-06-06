import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SpellData } from '../interfaces/spelldata';
import { ServiceInterface } from '../interfaces/serviceinterface';

@Injectable({
  providedIn: 'root'
})

export class SpellserviceService {

  constructor(private http: HttpClient) { }

  getSpellNames(): Observable<ServiceInterface[]> {
    return this.http.get<ServiceInterface[]>('http://localhost:8080/getSpellNames');
  }

  getSpellData(spellname: string): Observable<ServiceInterface> {

    let url = 'http://localhost:8080/getSpell';

    if (spellname != null && spellname !== '') {
      url = url + '?name=' + spellname;
    }

    return this.http.get<any>(url);
  }

}
