import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../core/Client";
import {ClientService} from "../../core/client.service";

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.reloadData();
  }
  clients: Observable<Client[]>;
  isupdated = false;
  client : Client=new Client();
  clientsList:any;

  reloadData(){
    this.clients = this.clientService.getClientsList();
  }
  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateClient(id: number){
    this.clientService.getClient(id)
      .subscribe(
        data => {
          this.clientsList=data
        },
        error => console.log(error));
  }


}
