import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FactureRoutingModule} from "./facture-routing.module";
import {ListesFacturesComponent} from "./listes-factures/listes-factures.component";



@NgModule({
  declarations: [ListesFacturesComponent],
  imports: [
    CommonModule,
    FormsModule,
    FactureRoutingModule
  ],
  exports:[
    ListesFacturesComponent
  ]
})
export class FactureModule { }
