import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetails } from 'src/planets/details/planet-details.componet';
import { PlanetListComponent } from 'src/planets/planet-list.component';

const routes: Routes = [
  // Default route (index)
  {path: '', component: PlanetListComponent},
  {path: 'planets', component: PlanetListComponent},
  {path: 'planets/details', component: PlanetDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
