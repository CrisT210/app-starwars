import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPersona } from '../model/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  title = 'Customer Management';
  people: any[];
  persona: IPersona;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas().subscribe(
      (data)=>{
        this.people = data['resultados'];
      }
    )
  }

  getPersonas(){
    this.personaService.getPersonas().subscribe(
      (data)=>{
        this.people = data['resultados'];
      }
    )
  }

  guardarUrl(urlPersona: string, urlHome: string, urlFilms: string[]): void{
    this.personaService.guardarUrl(urlPersona, urlHome, urlFilms)
  }

  paginador(num: number): void{
    this.personaService.paginador(num);
    this.ngOnInit();
  }
}
