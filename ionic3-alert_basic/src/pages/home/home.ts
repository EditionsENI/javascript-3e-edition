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
    let alerteBasique = this.alertController.create({
      // Titre de l'alerte
      title: 'Alerte enlèvement',
      // Message de l'alerte
      message: 'Le petit Ionic 3 a été enlevé !',
      // Bouton de fermeture de la fenêtre modale
      buttons: ['Ok']
    });
    // Affichage de la fenêtre modale
    alerteBasique.present();
    
  }

}