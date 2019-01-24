// Import de classes (système)
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import de classes (métier)
import { HomePage } from '../pages/home/home';

// Décorateur @Component
// Description de l'application (composant Angular) :
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  templateUrl: 'app.html'
})

// Classe de l'application (MyApp)
export class MyApp {
  
  // Page de lancement de l'application
  rootPage:any = HomePage;

  // Constructeur de la classe
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}