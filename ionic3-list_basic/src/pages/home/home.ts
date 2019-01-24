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
  //      - AlertController : Gestion de fenêtre d'alerte
  constructor(public alertController: AlertController) {}
  
  // Tableau des voitures
  marquesVoitures = [
    "Asthon Martin",
    "BMW",   
    "Ferrari",
    "Ford",
    "Mac Laren",
    "Porsche"    
  ];

  // Fonction d'affichage de la marque sélectionnée
  selectionMarque(marque: string) {
    
    // Instanciation de la fenêtre d'alerte
    let alert = this.alertController.create({
      // Titre de l'alerte
      title: "Marque sélectionnée",
      // Message de l'alerte
      message: marque,
      // Boutons de la fenêtre d'alerte
      buttons: [
        {
          text: "Fermer"
        }
      ]
    });
    
    // Affichage de l'alerte
    alert.present()

  }

}