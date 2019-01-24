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

  // Variables de la classe
  private resultatRadio: string;

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - AlertController : Gestion de fenêtre modale
  constructor(public alertController: AlertController) {}

  // Fonction afficherFenetreModale
  afficherFenetreModale() {
  
    // Instanciation de la fenêtre modale
    let alerteRadio = this.alertController.create();
      
    // Titre de l'alerte
    alerteRadio.setTitle('Couleur préférée');
    
    // Boutons radio
    alerteRadio.addInput({
      type: 'radio',
      label: 'Bleu',
      value: 'bleu',
      checked: true
    });
    alerteRadio.addInput({
      type: 'radio',
      label: 'Vert',
      value: 'vert'
    });
    alerteRadio.addInput({
      type: 'radio',
      label: 'Rouge',
      value: 'rouge'
    });
    alerteRadio.addInput({
      type: 'radio',
      label: 'Jaune',
      value: 'jaune'
    });
    
    // Boutons de validation
    alerteRadio.addButton('Annulation');
    alerteRadio.addButton({
      text: 'Validation',
      handler: data => {
        this.resultatRadio = data;
        this.affichageSelection();
      }      
    });
    
    // Affichage de l'alerte
    alerteRadio.present();
  
  }

  // Fonction affichageSelection
  affichageSelection() {
    
    // Affichage en mode console
    console.log("Couleur choisie : ", this.resultatRadio);
    
    // Affichage dans la division affichageResultat
    // du script home.html
    document.getElementById("affichageResultat").innerHTML
    = "<br><br><br>" + "Couleur choisie : " + this.resultatRadio;
    
  }

}