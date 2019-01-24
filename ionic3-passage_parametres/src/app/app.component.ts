// Import de classes (système)
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// Import de classes (métier)
import { HomePage } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';

// Décorateur @Component
// Description de l'application (composant Angular) :
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  templateUrl: 'app.html'
})

// Classe de l'application (MyApp)
export class MyApp {
  
  // Définition de la page root de l'application
  rootPage = HomePage;

  // Constructeur de la classe
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
}