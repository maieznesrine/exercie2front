import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponentComponent } from './liste-client-component/client-component.component';
import {ClientRoutingModule} from "./client-routing.module";
import { UpdateClientComponent } from './update-client/update-client.component';
import {FormsModule} from "@angular/forms";
import { AjoutClientComponent } from './ajout-client/ajout-client.component';



@NgModule({
  declarations: [ClientComponentComponent, UpdateClientComponent, AjoutClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ],
  exports:[
    ClientComponentComponent,
    UpdateClientComponent
  ]
})
export class ClientModule { }
