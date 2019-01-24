// Import de classes (système)
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

// Import de classes (métier)
import { Chart } from 'chart.js';

// Description de la page (composant Angular)
// via le décorateur @Component
// - selector = Page SCSS associée au script TypeScript
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// Classe de la page HomePage
export class HomePage {

  // Constructeur de la classe
  // NB : Classe héritant de la superclasse Http
  constructor(private http: Http)
  {
    this.http = http;
  }

  // Définition d'une fenêtre intégrée
  // s'affichant dans la page home.html
  // et pilotée par le contrôleur home.ts
  @ViewChild('beignet') doughnutCanvas;

  // Définition de la variable doughnutChart
  doughnutChart: any;

  // Fonction ionViewDidLoad
  // Objet : Chargement des données au format JSON
  //         depuis un script distant écrit en PHP
  //         et représentation du graphique
  ionViewDidLoad() {
  
    // Définition de l'URL du script serveur PHP-MySQL-JSON
    var url = 'http://christian.vigouroux.online.fr/ionic3/chartjs/chartjs_doughnut.php';
    
    // Soumission de la requête au serveur
    this.http.get(url).subscribe(data => {
      
      // Récupération du type de graphique
      var typeGraphique = data.json().type_graphique;
      // Récupération du libellé du graphique
      var libelleGraphique = data.json().libelle_graphique;
      // Récupération du tableau des labels
      var labels = data.json().labels;
      // Récupération du tableau des données
      var donnees = data.json().donnees;
      // Récupération du tableau des codes backgroundColor
      var backgroundColor = data.json().backgroundColor;
      // Récupération du tableau des codes de borderColor
      var borderColor = data.json().borderColor;

console.log("data : " + data);

      //
      // Instanciation d'un graphique de type beignet
      //
      this.doughnutChart = new Chart(
      
        this.doughnutCanvas.nativeElement,
        {
          // Type du graphique
          type: typeGraphique,
          // Données à représenter
          data:
          {
            // Etiquettes
            labels: [
              labels[0],
              labels[1],
              labels[2],
              labels[3],
              labels[4],
              labels[5]],
            // Données
            datasets:
            [{
              // Libellé
              label: libelleGraphique, 
              // Données
              data: [
                donnees[0],
                donnees[1],
                donnees[2],
                donnees[3],
                donnees[4],
                donnees[5]
              ],
              // Couleurs de fond
              backgroundColor: [
                backgroundColor[0],
                backgroundColor[1],
                backgroundColor[2],
                backgroundColor[3],
                backgroundColor[4],
                backgroundColor[5]
              ],
              // Couleurs des bordures
              borderColor: [
                borderColor[0],
                borderColor[1],
                borderColor[2],
                borderColor[3],
                borderColor[4],
                borderColor[5]
              ],
              // Epaisseur des bordures
              borderWidth: 1
            }]
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

    });

  }  

}