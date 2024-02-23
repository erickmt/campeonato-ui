import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PartidasComponent } from './partidas/partidas.component';
import { TimesComponent } from './times/times.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'times', component: TimesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
