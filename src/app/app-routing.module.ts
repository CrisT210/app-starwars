import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {path: '', redirectTo: '/personajes', pathMatch: 'full'},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'personajes/detalle', component: DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
