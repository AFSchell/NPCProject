import { Component, OnInit } from '@angular/core';
import { NpcserviceService } from '../app/services/npcservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NPCName } from '../app/interfaces/npcname';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NPCDisplayProject';
  npcNamesURL = '/getNPCNames';
  npcHost = 'localhost:8080';
  outNames: Observable<NPCName>;

  constructor(private http: HttpClient) {
    this.getNPCNames();
  }

  ngOnInit(): void {
    // Simple GET request with response type <any>
  }

  getNPCNames(): void {

    console.log('retrieving names');
    this.http.get('http://localhost:8080/getNPCNames').subscribe(
      (data: Observable<NPCName>) => { this.outNames = data; console.log(this.outNames); });
    //console.log( arrData );
  }
  /*
  getData(): Observable<Object> {
    let headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:8080/");
    console.log('building url with headers');
    return this.http.get(this.npcHost + this.npcNamesURL, { headers: headers});
  }
  */
}

