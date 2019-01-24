// Import de classes (système)
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import de classes (métier)
import { Page2 } from '../page2/page2';

// Décorateur @Component
// Description de la page (composant Angular) :
// - selector = Page SCSS associée au script TypeScript
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// Classe de la page HomePage
export class HomePage {

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - NavController : Gestion de la navigation entre les pages
  constructor(public navController: NavController) {}

  // Fonction calculRacines
  // NB : Calcul des racines du polynomes du second degré 
  calculRacines(a: number, b: number, c: number)    
  {

    // Déclaration de variables locales
    var racine0, racine1, racine2;
    var delta;
    var parametres;

    // Calcul du discriminant
    delta = (b * b) - (4 * a * c);
      
    // Détermination des racines
    if (delta < 0)
    {
      // Pas de racine
      // Paramètres à passer à page2
      parametres = {
        pas_racine: "Pas de solutions",
        racine0: 0,
        racine1: 0,
        racine2: 0
      };
    }
    else
    {
      if (delta == 0)
      {
        // Racine unique
        racine0 = -b / (2 * a);
        // Paramètres à passer à page2
        parametres = {
          pas_racine: "",
          racine0: racine0,
          racine1: 0,
          racine2: 0
        };
      }
      else
      {
        // Deux racines
        racine1 = (-b + Math.sqrt(delta)) / (2 * a);
        racine2 = (-b - Math.sqrt(delta)) / (2 * a);
        // Paramètres à passer à page2
        parametres = {
          pas_racine: "",
          racine0: 0,
          racine1: racine1,
          racine2: racine2
        };
      }
      
    }

    // Affichage de page2
    this.navController.push(Page2, parametres); 

  }  

}