// Import de classes (système)
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

// NB : - Installer la directive "@ionic/storage": "1.1.6", dans le fichier package.jon
//      - Installer Storage en version 1.1.6 via la commande : npm install @ionic/storage@1.1.6 --save --save-exact 

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

  // Variables de la classe
  prenom: string;
  nom: string;

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - Storage : Gestion du dispositif Local Storage
  constructor(public storage: Storage) {}

  // Fonction ecritureLocalStorage
  // NB : Ecriture de variables dans le Local Storage
  ecritureLocalStorage()
  {
	  
    // Affichage de contrôle en mode console
	  console.log("EcritureLocalStorage");
	  // Ecriture des variables Nom et Prenom depuis le Local Storage
	  this.storage.set("Nom", "VIGOUROUX");
    this.storage.set("Prenom", "Christian");    
    // Affichage de contrôle dans la division affichageControle1
    document.getElementById("affichageControle1").innerHTML
    = "Valeurs placées du Local Storage :<br/>"
    + "NOM=Vigouroux<br/>Prénom=Christian";  
  
  }

  // Fonction lectureLocalStorage
  // NB : Lecture de variables stockées en Local Storage
  lectureLocalStorage()
  {
	  
    // Affichage de contrôle en mode console
	  console.log("LectureLocalStorage");
	  // Lecture des variables Nom et Prenom dans le Local Storage
    this.storage.get("Nom").then((data) => {
      console.log("NOM :  : ", data);
      // Affichage de contrôle dans la division affichageControle2
      document.getElementById("affichageControle2").innerHTML
      = "Valeurs lues depuis le Local Storage :<br/>"
      + "NOM : " + data;
    })
    this.storage.get("Prenom").then((data) => {
      console.log("Prénom :  : ", data);
      // Affichage de contrôle dans la division affichageControle3
      document.getElementById("affichageControle3").innerHTML
      = "Prénom : " + data;  
    })

  }

}