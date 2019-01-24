// Import de classes (système)
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

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
  constructor() {}

  // Définition d'une fenêtre intégrée
  // s'affichant dans la page home.html
  // et pilotée par le contrôleur home.ts
  @ViewChild('secteurs') pieCanvas;

  // Définition de la variable pieChart
  pieChart: any;

  // Fonction ionViewDidLoad
  // NB : Lancement de la barre de progression à l'ouverture de la vue   
  ionViewDidLoad() {

    // Instanciation d'un graphique de type pie
    this.pieChart = new Chart(
      
      this.pieCanvas.nativeElement,
      {
        // Type de graphique
        type: 'pie',
        // Données à représenter
        data:
        {
          // Etiquettes
          labels:
          [
            "UEFA",
            "CONMEBOL",
            "AFC",
            "CONCACAF",
            "CAF"
          ],
          // Jeu de données
          datasets:
          [
            {
              // Libellé  
              label: 'Nombre de pays par confédération',
              // Séries
              data: [14, 5, 5, 3, 5],
              // Couleurs de fond
              backgroundColor:
              [
                "Green",         // Vert
                "Blue",          // Bleu
                "Yellow",        // Jaune
                "Red",           // Rouge
                "Gray"           // Gris
              ],
              // Couleurs de survol
              hoverBackgroundColor:
              [
                'rgba(144, 238, 144, 0.2)',        // Vert clair
                'rgba(173,216,230, 0.2)',          // Bleu clair
                'rgba(255, 255, 224, 0.2)',        // Jaune clair
                'rgba(255, 192, 203, 0.2)',        // Rose
                'rgba(211, 211,211, 0.2)'          // Gris clair
              ]
            }
          ]
        },
        // Options de représentation
        options:
        {
          animation:
          {
            // Affichage du graphique avec un effet rotatif
            animateRotate: true
          }
        }
      }

    );

  }

}