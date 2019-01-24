// Import de classes (système)
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Décorateur @Component
// Description de la page (composant Angular) :
// - selector = Page SCSS associée au script TypeScript
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

// Classe de la page Page2
export class Page2 {

  // Variables de la classe
  private prenom: string;
  private nom: string;
  private sport1: string;
  private sport2: string;
  private sport3: string;

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - NavController : Gestion de la navigation entre pages
  //      - NavParams : Gestion du passage de paramètres entre pages 
  constructor(public navController: NavController, public navParams: NavParams) {}

  // Fonction ionViewDidLoad
  // NB : Fonction se déclenchant automatiquement
  //      au chargement de la page
  ionViewDidLoad() {
  	
  	// Message en mode console
    console.log("page2 est affichée");
    
    // Récupération des paramètres
    this.prenom = this.navParams.get("prenom");
    this.nom = this.navParams.get("nom");
    let sports_favoris = this.navParams.get("sports_favoris");  
    this.sport1 = sports_favoris[0];
    this.sport2 = sports_favoris[1];
    this.sport3 = sports_favoris[2];

    // Affichage des paramètres transmis par la page home en mode console
    console.log("Prénom : " + this.prenom);
    console.log("Nom : " + this.nom);
    console.log("Sport n°1 : " + this.sport1);
    console.log("Sport n°2 : " + this.sport2);
    console.log("Sport n°3 : " + this.sport3);
    
  }

}