import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormControl, NgForm} from '@angular/forms';
import * as _ from 'lodash';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

import { GescategorieComponent } from './gescategorie/gescategorie.component';
import { GesclientComponent } from './gesclient/gesclient.component';
import { GescommandeComponent } from './gescommande/gescommande.component';
import { GesfournisseurComponent } from './gesfournisseur/gesfournisseur.component';
import { GesgerantComponent } from './gesgerant/gesgerant.component';
import { GesmarqueComponent } from './gesmarque/gesmarque.component';
import { GespventeComponent } from './gespvente/gespvente.component';
import { GessignaletiqueComponent } from './gessignaletique/gessignaletique.component';
import { GesfactureComponent } from './gesfacture/gesfacture.component';
import { GesstockComponent } from './gesstock/gesstock.component';
import { GesnewsComponent } from './gesnews/gesnews.component';
import { GespromoComponent } from './gespromo/gespromo.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AchatsComponent } from './achats/achats.component';
import { PromosComponent } from './promos/promos.component';
import { AproposComponent } from './apropos/apropos.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SigninComponent } from './signin/signin.component';
import {GesproduitComponent } from './gesproduit/gesproduit.component';
import { HeaderComponent } from './header/header.component';
import { BotomComponent } from './botom/botom.component';
import { CreatecategorieComponent } from './createcategorie/createcategorie.component';


@NgModule({
  declarations: [
    AppComponent,
    GescategorieComponent,
    GesclientComponent,
    GescommandeComponent,
    GesfournisseurComponent,
    GesgerantComponent,
    GesmarqueComponent,
    GespventeComponent,
    GessignaletiqueComponent,
    GesfactureComponent,
    GesstockComponent,
    GesnewsComponent,
    GespromoComponent,
    AccueilComponent,
    AchatsComponent,
    PromosComponent,
    AproposComponent,
    NewsComponent,
    ContactComponent,
    RechercheComponent,
    SigninComponent,
    GesproduitComponent,
    HeaderComponent,
    BotomComponent,
    CreatecategorieComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatSlideToggleModule,
    RouterModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
  
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  

    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
