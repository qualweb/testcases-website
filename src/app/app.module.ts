import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HtmlTechniquesComponent } from './html-techniques/html-techniques.component';
import { CssTechniquesComponent } from './css-techniques/css-techniques.component';
import { BestPracticesComponent } from './best-practices/best-practices.component';
import { HomeComponent } from './home/home.component';
import { TechniqueInfoComponent } from './technique-info/technique-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HtmlTechniquesComponent,
    CssTechniquesComponent,
    BestPracticesComponent,
    HomeComponent,
    TechniqueInfoComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
