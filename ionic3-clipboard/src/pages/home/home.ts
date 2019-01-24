// Import de classes (système)
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

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
  //      - Clipboard : Gestion du presse-papier (Copier/Coller)
  constructor(public clipboard: Clipboard) {}

  // Fonction copierVersPressePapier
  copierVersPressePapier() {
    // Copier vers le Presse-Papier
    this.clipboard.copy("Message en Presse-Papier");    
  }

  // Fonction collerDepuisPressePapier
  collerDepuisPressePapier() {
    // Coller depuis le Presse-Papier
    this.clipboard.paste().then(
      (messagePressePapier: string) => {
        // Affichage de contrôle en mode console
        console.log("Presse-Papier : "
        + messagePressePapier);
        // // Affichage de contrôle par alert
        alert(messagePressePapier);
        // Affichage de contrôle dans la division affichageControle
        document.getElementById("affichageControle").innerHTML =
        "<br/><br/><br/>"
        + "Presse-Papier : "
        + messagePressePapier;
      },
      (erreurPressePapier: string) => {
        // Affichage de contrôle en mode console
        console.log("Presse-Papier : "
        + erreurPressePapier);
        // // Affichage de contrôle par alert        
        alert("Erreur : "
        + erreurPressePapier);
        // Affichage de contrôle dans la division affichageControle
        document.getElementById("affichageControle").innerHTML =
        "<br/><br/><br/>"
        + "Presse-Papier : "
        + erreurPressePapier;
      }
    );
          
  }

}