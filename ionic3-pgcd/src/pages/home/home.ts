// Import de classes (système)
import { Component } from '@angular/core';

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
  constructor() {}

  // Fonction calculPgcd
  // NB : Calcul du PGCD
  calculPgcd(a: number, b: number)    
  {

    // Déclaration de variables locales
    var reste;

    //
    //  Boucle de traitement
    //
    // Détermination du reste
    reste = a % b;
    while (reste != 0)
    {
      // Remplacement de a par b et de b par le reste
      a = b;
      b = reste;
      // Détermination du reste
      reste = a % b;
    }

    // Affichage du résultat dans la division affichageResultat
    document.getElementById("affichageResultat").innerHTML
    = "<br/><br/><br/>" + "PGCD : " + b
    + "<br/><br/>Actualisez l'affichage par clic sur le bouton";

  }  

}