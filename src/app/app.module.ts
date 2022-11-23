import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './Pages/home/home.component';
import { CarrierComponent } from './Pages/carrier/carrier.component';
import { RouterModule } from '@angular/router';
import { CarrierContentComponent } from './carrier-content/carrier-content.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    ProjectsComponent,
    HomeComponent,
    CarrierComponent,
    CarrierContentComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
