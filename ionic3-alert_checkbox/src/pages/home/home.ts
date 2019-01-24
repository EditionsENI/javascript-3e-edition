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
  private casesCochees: any;

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - AlertController : Gestion de fenêtre modale
  constructor(public alertController: AlertController) {}

  // Fonction afficherFenetreModale
  afficherFenetreModale() {
    
    // Instanciation de la fenêtre modale
    let alerteCheckBox = this.alertController.create();
    
    // Titre de la fenêtre
    alerteCheckBox.setTitle('Quels pays avez-vous visités ?');

    // Liste des pays
    alerteCheckBox.addInput({
      type: 'checkbox',
      label: 'France',
      value: 'value1',
      checked: true
    });
    alerteCheckBox.addInput({
      type: 'checkbox',
      label: 'Espagne',
      value: 'value2'
    });
    alerteCheckBox.addInput({
      type: 'checkbox',
      label: 'Grande-Bretagne',
      value: 'value3'
    });
    alerteCheckBox.addInput({
      type: 'checkbox',
      label: 'Italie',
      value: 'value4'
    });
    alerteCheckBox.addInput({
      type: 'checkbox',
      label: 'Allemagne',
      value: 'value5'
    });

    // Bouton Cancel
    alerteCheckBox.addButton('Cancel');
    
    // Bouton Ok
    alerteCheckBox.addButton({
      text: 'Ok',
      handler: data => {
        console.log("Pays visités : ", data);
        // this.testCheckboxOpen = false;
        this.casesCochees = data;
        console.log("testCheckboxResult : ", this.casesCochees);
        this.affichageSelection();
      }
    });

    // Affichage de la fenêtre modale
    alerteCheckBox.present();

  }

  // Fonction affichageSelection
  affichageSelection() {
    
    // Affichage en mode console
    console.log("Pays visités : ", this.casesCochees);
    
    // Affichage dans la division affichageSelectionVersion1
    // du script home.html (version 1)
    document.getElementById("affichageSelectionVersion1").innerHTML
    = "<br><br><br>" + "Affichage Version 1 : "
    + this.casesCochees;
    
    // Affichage dans la division affichageSelectionVersion2
    // du script home.html (version 2)
    var affichageVersion2 = "";
    var i: number;
    for(i = 0; i < this.casesCochees.length; i++)
    {
      affichageVersion2 = affichageVersion2
      + this.casesCochees[i] + "<br>";
    }
    document.getElementById("affichageSelectionVersion2").innerHTML
    = "<br><br>" + "Affichage Version 2 : " + "<br>"
    + affichageVersion2;     

    // Affichage dans la division affichageSelectionVersion3
    // du script home.html (version 3)
    var affichageVersion3 = "";
    for(i = 0; i < this.casesCochees.length; i++)
    {
      if (this.casesCochees[i] == "value1") {
        affichageVersion3 = affichageVersion3
        + "France" + "<br>";
      } 
    }
    for(i = 0; i < this.casesCochees.length; i++)
    {
      if (this.casesCochees[i] == "value2") {
        affichageVersion3 = affichageVersion3
        + "Espagne" + "<br>";
      } 
    }
    for(i = 0; i < this.casesCochees.length; i++)
    {
      if (this.casesCochees[i] == "value3") {
        affichageVersion3 = affichageVersion3
        + "Grande-Bretagne" + "<br>";
      } 
    }
    for(i = 0; i < this.casesCochees.length; i++)
    {
      if (this.casesCochees[i] == "value4") {
        affichageVersion3 = affichageVersion3
        + "Italie" + "<br>";
      } 
    }
    for(i = 0; i < this.casesCochees.length; i++)
    {
      if (this.casesCochees[i] == "value5") {
        affichageVersion3 = affichageVersion3
        + "Allemagne" + "<br>";
      } 
    }
    document.getElementById("affichageSelectionVersion3").innerHTML
    = "<br><br>" + "Affichage Version 3 : " + "<br>"
    + affichageVersion3;     

  }

}