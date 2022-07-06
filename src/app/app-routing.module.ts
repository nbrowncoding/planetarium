import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetails } from 'src/planets/details/planet-details.componet';
import { PlanetListComponent } from 'src/planets/planet-list.component';

const routes: Routes = [
  // Default route (index)
  {path: 'planets', component: PlanetListComponent},
  {path: 'planets/:name', component: PlanetDetails},
  {path: '', component: PlanetListComponent},
  {path: '**', redirectTo: 'planets', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
