import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponentComponent} from "./liste-client-component/client-component.component";
import {UpdateClientComponent} from "./update-client/update-client.component";
import {AjoutClientComponent} from "./ajout-client/ajout-client.component";


const routes: Routes = [
  {path:"clients",component:ClientComponentComponent},
  {path:"clients/update/:id",component:UpdateClientComponent},
  {path:"add",component:AjoutClientComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
