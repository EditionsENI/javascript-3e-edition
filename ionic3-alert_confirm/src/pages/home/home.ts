// Import de classes (système)
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

// Décorateur @Component
// Description de la page (composant Angular) :
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  templateUrl: 'home.html'
})

// Classe de la page HomePage
export class HomePage {

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - AlertController : Gestion de fenêtre modale
  constructor(public alertController: AlertController) {}

  // Fonction afficherFenetreModale
  afficherFenetreModale() {
  
    // Instanciation de la fenêtre modale
    let alerteConfirmation = this.alertController.create({
      // Titre de l'alerte
      title: "Utilisation d'Ionic 3",
      // Message de l'alerte
      message: 'Allez-vous utiliser Ionic 3 pour vos développements pour smartphones ?',
      // Boutons de la fenêtre modale
      buttons: [
        {
          text: "Oui",
          handler: () => {
            // Affichage en mode console
            console.log("Utilisation Ionic 3 prévue");
            // Affichage dans la division affichageResultat du script home.html
            document.getElementById("affichageResultat").innerHTML = "<br><br>" + "Utilisation Ionic 3 prévue"; 
          }
        },
        {
          text: "Non",
          handler: () => {
            // Affichage en mode console
            console.log("Utilisation Ionic 3 non prévue");
            // Affichage dans la division affichageResultat du script home.html
            document.getElementById("affichageResultat").innerHTML = "<br><br>" + "Utilisation Ionic 3 non prévue"; 
          }
        }
      ]
    });
    
    // Affichage de fa fenêtre modale
    alerteConfirmation.present();
    
  }

}