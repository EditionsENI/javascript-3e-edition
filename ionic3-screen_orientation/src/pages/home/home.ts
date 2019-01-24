// Import de classes (système)
import {Component} from '@angular/core';
import {ScreenOrientation} from "@ionic-native/screen-orientation";

// Décorateur @Component
// Description de la page (composant Angular) :
// - selector = Page SCSS associée au script TypeScript
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// Classe de la page HomePage
export class HomePage 
{

  //
  // Variables de la classe
  //
  // Orientation de l'écran
  private screenOrientation: ScreenOrientation;

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - ScreenOrientation : Gestion de l'orientation de l'écran
  constructor(screenOrientation: ScreenOrientation)
  {
    // Mémorisation de l'orientation de l'écran
    this.screenOrientation = screenOrientation;
  }

  // Fonction verrouillerPaysage
  // NB : Blocage de l'orientation en mode Paysage
  verrouillerPaysage()
  {
    // Affichage d'un message de contrôle sous forme d'alerte
    alert("Blocage de l'orientation en mode Paysage");
    // Blocage de l'orientation en mode Paysage
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.LANDSCAPE
    );
  }

  // Fonction verrouillerPortrait
  // NB : Blocage de l'orientation en mode Portrait
  verrouillerPortrait()
  {
    // Affichage d'un message de contrôle sous forme d'alerte
    alert("Blocage de l'orientation en mode Portrait");
    // Blocage de l'orientation en mode Portrait
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT
    );
  }

  // Fontion deverrouiller
  // NB : Déblocage du changement d'orientation de l'écran
  deverrouiller()
  {
    // Affichage d'un message de contrôle sous forme d'alerte
    alert("Changement d'orientation de l'écran débloqué");
    // Déblocage du changement d'orientation de l'écran
    this.screenOrientation.unlock();
  }

  // Fonction rechercherOrientation
  // NB : Détermination de l'orientation actuelle de l'écran
  rechercherOrientation()
  {
    // Affichage d'un message de contrôle sous forme d'alerte
    alert("Orientation actuelle de l'écran : "
    + this.screenOrientation.type);
  }

}