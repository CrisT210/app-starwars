import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPersona } from '../model/persona';
import { IPlanet } from '../model/planet';
import { IFilm } from '../model/film';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  pageNumber: number = 1;
  urlPersona: string = '';
  urlHome: string = '';
  urlFilms: string[];

  constructor(private http: HttpClient,
              private router: Router) { }

  getPersonas(): Observable<any>{
    const base = environment.urlBase;
    return this.http.get<any>(base + '/people/?page='+ this.pageNumber).pipe(
      map(response =>
        ({
          resultados: response.results
      } as any)
      )
    );
  }

  paginador(num: number){
    switch (num) {
      case 0:
        if(this.pageNumber != 1){
          this.pageNumber--;
          this.getPersonas();
        }
        break;
      case 1:
        this.pageNumber = 1;
        this.getPersonas();
        break;
      case 2:
        this.pageNumber = 2;
        this.getPersonas();
        break;
      case 3:
        this.pageNumber = 3;
        this.getPersonas();
        break;
      case 4:
        this.pageNumber = 4;
        this.getPersonas();
        break;
      case 5:
        this.pageNumber = 5;
        this.getPersonas();
        break;
      case 6:
        this.pageNumber = 6;
        this.getPersonas();
        break;
      case 7:
        this.pageNumber = 7;
        this.getPersonas();
        break;
      case 8:
        this.pageNumber = 8;
        this.getPersonas();
        break;
      case 9:
        this.pageNumber = 9;
        this.getPersonas();
        break;
      case 10:
        if(this.pageNumber != 9){
          this.pageNumber++;
          this.getPersonas();
        }
        break;
    }
  }

  guardarUrl(urlPersona: string, urlHome: string, urlFilms: string[]){
    this.urlPersona = urlPersona;
    this.urlHome = urlHome;
    this.urlFilms = urlFilms;
  }

  getPersona(): Observable<IPersona>{
    let persona = this.http.get<IPersona>(this.urlPersona);
    return persona;
  }

  getNamePlanet(): Observable<IPlanet>{
    return this.http.get<IPlanet>(this.urlHome);  
  }

  getNamesFilms(): any[]{
    console.log(this.urlFilms[0]);
    const arrFilms = new Array(); 
    for(let i = 0; i < this.urlFilms.length; i++){
      let film = this.http.get<IFilm>(this.urlFilms[i]);
      film.subscribe(
        (film)=>{
          arrFilms.push(film.title);
        }
      )
    }
    return arrFilms;
  }

}
