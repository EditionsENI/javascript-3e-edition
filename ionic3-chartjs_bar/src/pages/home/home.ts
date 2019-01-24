// Import de classes (système)
import { Component, ViewChild } from '@angular/core';
// import { NavController } from 'ionic-angular';

// Import de classes (métier)
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
  @ViewChild('histogramme') barCanvas;

  // Définition de la variable barChart
  barChart: any;

  // Fonction ionViewDidLoad
  // NB : Lancement de la barre de progression à l'ouverture de la vue    
  ionViewDidLoad() {

    // Définition du type de graphique
    var typeGraphique = 'bar';
    
    // Instanciation d'un graphique de type histogramme
    this.barChart = new Chart(
      this.barCanvas.nativeElement,
      {
        // Type du graphique
        type: typeGraphique,
        // Données à représenter
        data:
        {
          // Etiquettes
          labels:
          [
            "KANE",
            "MBAPPE", 
            "LUKAKU", 
            "CHERISHEV", 
            "RONALDO", 
            "GRIEZMANN"
          ],
          // Données
          datasets:
          [{
            // Libellé du graphique
            label: 'Nombre de buts',
            // Données
            data:
              [6, 4, 4, 4, 4, 4],
            // Couleurs de fond
            backgroundColor:
            [
              'rgba(105, 105, 105)',        // Gris mat
              'rgba(128, 128, 128)',        // Gris   
              'rgba(169, 169, 169)',        // Gris très foncé 
              'rgba(192, 192, 192)',        // Gris argent
              'rgba(211, 211, 211)',        // Gris clair
              'rgba(220, 220, 220)'         // Gris étain
            ],
            // Couleurs des bordures
            borderColor:
            [
              'rgba(0, 0, 0)',              // Noir
              'rgba(0, 0, 0)',              // Noir
              'rgba(0, 0, 0)',              // Noir
              'rgba(0, 0, 0)',              // Noir
              'rgba(0, 0, 0)',              // Noir
              'rgba(0, 0, 0)'               // Noir
            ],
            // Epaisseur des bordures
            borderWidth: 1
          }]
        },
        // Options des axes
        options: {
          // Affichage des légendes de barres (noms des joueurs)
          scaleShowValues: true,
          // Gestion des axes
          scales: {
            // Axe vertical (nombre de buts)
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            // Axe horizontal (noms de joueurs)
            xAxes: [{
              ticks: {
                // Afin que toutes les barres soient identifiées
                autoSkip: false
              }
            }]
          }
        }
      }
    );

  }

}