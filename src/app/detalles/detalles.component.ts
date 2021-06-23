import { Component, OnInit } from '@angular/core';
import { IFilm } from '../model/film';
import { IPersona } from '../model/persona';
import { IPlanet } from '../model/planet';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  persona: IPersona;
  planet: IPlanet;
  film: string[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersona().subscribe(
      (persona)=>{
        this.persona = persona;
      }
    )
    this.getPlanet();
    this.getFilm();
  }

  getPlanet(): void{
    this.personaService.getNamePlanet().subscribe(
      (planet)=>{
        this.planet = planet;
      }
    )
  }

  getFilm(): void{
    this.film = this.personaService.getNamesFilms()
  }
}
