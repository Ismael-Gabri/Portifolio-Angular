import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrierComponent } from './Pages/carrier/carrier.component';

import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carrier', component: CarrierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
