import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListesFacturesComponent} from "./listes-factures/listes-factures.component";


const routes: Routes = [
  {path:"facture/:id",component:ListesFacturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
