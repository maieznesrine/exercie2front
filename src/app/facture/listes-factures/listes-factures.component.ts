import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Facture} from "../../core/Facture";
import {FactureService} from "../../core/facture.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listes-factures',
  templateUrl: './listes-factures.component.html',
  styleUrls: ['./listes-factures.component.css']
})
export class ListesFacturesComponent implements OnInit {
  constructor(private factureService:FactureService,private route: ActivatedRoute) { }
  factures: Observable<Facture[]>;

  private id:number;
  ngOnInit() {
    //pour recuperer un id de l'url
    this.id = this.route.snapshot.params.id;
    console.log("this id is "+this.id);
    this.reloadData();
  }
  reloadData(){
    this.factures = this.factureService.getFactureByClient(this.id);
  }

}
