import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModules } from 'src/material.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { FactsComponent } from './pages/facts/facts.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ButtonComponent,
    FeaturedComponent,
    FactsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
