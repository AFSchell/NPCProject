import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NPCDisplayProject';
  npcNamesURL = '/getNPCNames';
  npcHost = 'localhost:8080';
  //  npcService: NpcserviceService;

  constructor() { }

  ngOnInit(): void {}

  /*
  getData(): Observable<Object> {
    let headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:8080/");
    console.log('building url with headers');
    return this.http.get(this.npcHost + this.npcNamesURL, { headers: headers});
  }
  */
}

