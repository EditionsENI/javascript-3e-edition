// Import de classes (système)
import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';

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
  private id: string;
  private modele: string;
  private cordova: string;
  private platforme: string;
  private version: string;
  private fabricant: string;
  private numeroSerie: string;
  private modeEmulation: boolean;

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - Device : Gestion du hardware du périphérique
  constructor(private device: Device) {}

  // Fonction recupInfos
  // NB : Récupération des caractériqiques du périphérique
  recupInfos()
  {

    // Identifiant du périphérique
    this.id = this.device.uuid;
    // Modèle
    this.modele = this.device.model;
    // Information sur Cordova
    this.cordova = this.device.cordova;
    // Information sur la plateforme
    this.platforme = this.device.platform;
    // Version
    this.version = this.device.version;
    // Fabricant
    this.fabricant = this.device.manufacturer;
    // Numéro de série
    this.numeroSerie = this.device.serial;
    // Appareil virtuel ou non
    this.modeEmulation = this.device.isVirtual;

  }

}