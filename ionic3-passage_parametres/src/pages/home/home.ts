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
  //      - NavController : Gestion de la navigation entre pages
  constructor(public navController: NavController) {}

  // Fonction appelPage2
  appelPage2() {
    
    // Message en mode console
    console.log("Appel de la page2"); 

    // Paramètres à passer à page2
    let parametres = {
      prenom: "Christian",
      nom: "VIGOUROUX",
      sports_favoris: [
        "Football",
        "Moto",
        "Monocycle"
      ]
    };

    // Affichage de page2
    this.navController.push(Page2, parametres);

    // Autre technique de transfert des paramètres
    // this.navController.push(Page2, {
    //   prenom: "Christian",
    //   nom: "VIGOUROUX",
    //   sports_favoris: [
    //     "Football",
    //     "Moto",
    //     "Monocycle"
    //   ]
    // });

  }

}