import { Categorie } from "./categorie";
import { Marque } from "./marque";
import { PromoProd } from "./promo-prod";
import { Stock } from "./stock";
export class Produit {

    Id!: number;
    Nom!: String;
    Prix!: number;
    Photo!: String;
    Nouveaute!: string;

    // Navigation properthies

    CategorieId!: number;
    Categorie!: Categorie; 

    MarqueId!: number;
    Marque!: Marque;

    StockId!: number;
    Stock!: Stock;
    
    PromoProds:PromoProd[] = [];
}
