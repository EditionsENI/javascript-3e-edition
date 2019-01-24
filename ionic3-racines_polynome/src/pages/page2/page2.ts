// Import de classes (système)
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Décorateur @Component
// Description de la page (composant Angular) :
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'page2.html'
})

// Classe de la page Page2
export class Page2 {

  // Variables de la classe
  pasRacine;
  racine0;
  racine1;
  racine2;
  affichageResultat;

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - NavController : Gestion de la navigation entre les pages
  //      - NavParams : Gestion du passage de paramètres entre les pages 
  constructor(public navController: NavController, public navParams: NavParams) {}

  // Fonction ionViewDidLoad
  // NB : Fonction se déclenchant automatiquement au chargement de la page
  ionViewDidLoad() {
  	
  	// Message en mode console
    console.log("page2 est affichée");
    
    // Affichage des paramètres reçus en mode console
    console.log("Pas de racine : ", this.navParams.get("pas_racine"));
    console.log("Racine unique : ", this.navParams.get("racine0"));
    console.log("Racine 1 : ", this.navParams.get("racine1"));
    console.log("Racine 2 : ", this.navParams.get("racine2"));

    // Récupération des résultats passés par le contrôleur home.ts
    this.pasRacine = this.navParams.get("pas_racine");
    this.racine0 = this.navParams.get("racine0");
    this.racine1 = this.navParams.get("racine1");
    this.racine2 = this.navParams.get("racine2");
    
    // Mise à disposition des racines à la page page2.html
    if (this.pasRacine == "Pas de solutions")
    {
      this.affichageResultat = "Pas de solutions (delta < 0)"; 
    }
    else
    {
      if (this.racine0 != 0)
      {
        this.affichageResultat
        = "Racine unique (delta nul) : "
        + this.racine0; 
      }
      else
      {
        this.affichageResultat = "Racine 1 : "
        + this.racine1
        + " et "
        + "Racine 2 : "
        + this.racine2;        
      }
    }

  }

}