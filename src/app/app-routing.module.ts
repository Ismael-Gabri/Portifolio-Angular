import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';


import { CarrierComponent } from './Pages/carrier/carrier.component';
import { ContactComponent } from './pages/contact/contact.component';

import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carrier', component: CarrierComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
