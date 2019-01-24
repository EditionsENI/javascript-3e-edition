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
  afficherFenetreModale()
  {
  
    // Instanciation de la fenêtre modale
    let alertPrompt = this.alertController.create({
      // Titre de l'alerte
      title: 'Login',
      // Message de l'alerte
      message: "Saisie de votre identifiant",
      // Champs de saisie de la fenêtre modale
      inputs: [
        {
          name: "login",
          placeholder: "identifiant"
        },
      ],
      // Boutons de la fenêtre modale      
      buttons: [
        {
          text: 'Annulation',
          handler: data => {
            // Affichage en mode console
            console.log("Annulation demandée");
            // Affichage dans la division affichageResultat
            // du script home.html
            document.getElementById("affichageResultat").innerHTML
            = "<br><br>" + "Annulation demandée"; 
          }
        },
        {
          text: 'Confirmation',
          handler: data => {
            // Affichage en mode console
            console.log("Sauvegarde demandée");
            // Affichage dans la division affichageResultat
            // du script home.html
            document.getElementById("affichageResultat").innerHTML
            = "<br><br>" + "Votre identifiant est " + data.login; 
          }
        }
      ]      
    });
    
    // Affichage de la fenêtre modale
    alertPrompt.present();

  }

}