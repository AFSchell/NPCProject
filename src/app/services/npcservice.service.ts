import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NpcserviceService {
  npcNamesURL = '/getNPCNames';
  npcHost = 'localhost:8080';

  names: string[];

  constructor(private http: HttpClient) { }

  getNPCNames(): void {

    console.log('retrieving names');
    this.getData().subscribe(data => console.log(data));

    console.log('tried to retreive names');
  }

  getData() {
    console.log('building url');
    return this.http.get(this.npcHost + this.npcNamesURL);
  }

}
