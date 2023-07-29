import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballerComponent } from './Components/Main/Footballer/footballer.component';

const routes: Routes = [
  {path : "footballer", component : FootballerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
