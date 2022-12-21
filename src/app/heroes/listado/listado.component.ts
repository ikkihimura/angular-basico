import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman','Hulk'];
  heroeEliminado: string="";

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe():void {

    console.log("borrando...");

    this.heroeEliminado = this.heroes.shift()||'';
  }
}
