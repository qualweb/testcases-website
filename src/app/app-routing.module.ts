import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtmlTechniquesComponent } from './html-techniques/html-techniques.component';
import { CssTechniquesComponent } from './css-techniques/css-techniques.component';
import { BestPracticesComponent } from './best-practices/best-practices.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html-techniques', component: HtmlTechniquesComponent },
  { path: 'css-techniques', component: CssTechniquesComponent },
  { path: 'best-practices', component: BestPracticesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
