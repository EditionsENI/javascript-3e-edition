// Import de classes (système)
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Import de classes (métier)
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Décorateur NgModule (indiquant les propriétés de la classe AppModule)
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

// Exposition de la classe principale (AppModule)
export class AppModule {}