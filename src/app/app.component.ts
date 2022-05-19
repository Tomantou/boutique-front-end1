import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(private router:Router) { }

  title = 'Boutiklapp';
  opened = false;

  gotoProduitClick(): void{
    this.router.navigate(['gesproduit']);
 }

 gotoMarqueClick(): void{
  this.router.navigate(['gesmarque']);
}

  gotoCategorieClick(): void{
    this.router.navigate(['gescategorie']);
 }

 gotoClientClick(): void{
  this.router.navigate(['gesclient']);
}

gotoCommandeClick(): void{
  this.router.navigate(['gescommande']);
}

gotoFactureClick(): void{
  this.router.navigate(['gesfacture']);
}

gotoFournisseurClick(): void{
  this.router.navigate(['gesfournisseur']);
}

gotoGerantClick(): void{
  this.router.navigate(['gesgerant']);
}

gotoNewsClick(): void{
  this.router.navigate(['gesNews']);
}

gotoPromotionClick(): void{
  this.router.navigate(['gespromo']);
}

gotoPventeClick(): void{
  this.router.navigate(['gespvente']);
}

gotoSignaletiqueClick(): void{
  this.router.navigate(['gessignaletique']);
}

  gotoStockClick(): void{
    this.router.navigate(['gesstock']);
 }

 

}
