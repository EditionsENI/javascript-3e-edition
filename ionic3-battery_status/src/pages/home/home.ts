// Import de classes (système)
import { Component } from '@angular/core';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

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

  // Variables de la classe
  private infosBatterie : any;
  private niveauBatterie: number;

  // Constructeur de la classe
  constructor(private batteryStatus: BatteryStatus) {}
  
  // Fonction ionViewDidLoad
  // NB : Déclenchement au chargement de la vue
  ionViewDidLoad()
  {
    
    // Affichage de contrôle en mode console
    console.log('ionViewDidLoad BatteryStatus');
    
    // Inscription aux informations concernant la batterie
    this.infosBatterie = this.batteryStatus.onChange().subscribe(
      (statutBatterie: BatteryStatusResponse) => {
        // Récupération du niveau de la batterie
        this.niveauBatterie = statutBatterie.level;
      }
    );
    
  }
  
  // Fonction ionViewWillLeave
  // NB : Déclenchement à la sortie de vue
  ionViewWillLeave()
  {
    // Désinscription aux informations concernant la batterie
    this.infosBatterie.unsubscribe();
  }

}