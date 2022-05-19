import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GescategorieComponent } from './gescategorie/gescategorie.component';
import { GesclientComponent } from './gesclient/gesclient.component';
import { GescommandeComponent } from './gescommande/gescommande.component';
import { GesfournisseurComponent } from './gesfournisseur/gesfournisseur.component';
import { GesgerantComponent } from './gesgerant/gesgerant.component';
import { GesmarqueComponent } from './gesmarque/gesmarque.component';
import { GespventeComponent } from './gespvente/gespvente.component';
import { GessignaletiqueComponent } from './gessignaletique/gessignaletique.component';
import { GespromoComponent } from './gespromo/gespromo.component';
import { GesnewsComponent } from './gesnews/gesnews.component';
import { GesstockComponent } from './gesstock/gesstock.component';
import { GesfactureComponent } from './gesfacture/gesfacture.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AchatsComponent } from './achats/achats.component';
import { PromosComponent } from './promos/promos.component';
import { AproposComponent } from './apropos/apropos.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SigninComponent } from './signin/signin.component';
import { GesproduitComponent } from './gesproduit/gesproduit.component';

const routes: Routes = [
  {
    path:"", component:AccueilComponent,
  },

  {
    path:"accueil", component:AccueilComponent,
  },

  {
    path:"achats", component:AchatsComponent,
  },

  {
    path:"news", component:NewsComponent,
  },

  {
    path:"promos", component:PromosComponent,
  },

  {
    path:"contact", component:ContactComponent,
  },
  
  {
    path:"apropos", component:AproposComponent,
  },

  {
    path:"recherche", component:RechercheComponent,
  },

  {
    path:"signin", component:SigninComponent,
  },

  {
    path:"gescategorie", component:GescategorieComponent,
  },

  {
    path:"gesclient", component:GesclientComponent,
  },

  {
    path:"gescommande", component:GescommandeComponent,
  },

  {
    path:"gesfacture", component:GesfactureComponent,
  },

  {
    path:"gesfournisseur", component:GesfournisseurComponent,
  },

  {
    path:"gesgerant", component:GesgerantComponent,
  },

  {
    path:"gesmarque", component:GesmarqueComponent,
  },

  {
    path:"gesnews", component:GesnewsComponent,
  },
  
  {
    path:"gespromo", component:GespromoComponent,
  },

  {
    path:"gespvente", component:GespventeComponent,
  },

  {
    path:"gessignaletique", component:GessignaletiqueComponent,
  },

  {
    path:"gesproduit", component:GesproduitComponent,
  },

  {
    path:"gesstock", component:GesstockComponent,
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
