import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../core/client.service";
import {Client} from "../../core/Client";

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  constructor( private clientService:ClientService) { }
  client: Client = new Client();
  submitted = false;
  ngOnInit() {
  }
  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }
  save() {
    this.clientService.saveClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
