// Import de classes (système)
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

// Décorateur @Component
// Description de la page (composant Angular) :
// - templateUrl = Page HTML associée au script TypeScript
@Component({
  templateUrl: 'home.html'
})

// Classe de la page HomePage
export class HomePage {

  // Constructeur de la classe
  // NB : Classe héritant d'une ou de plusieurs superclasses :
  //      - AlertController : Gestion de fenêtre d'alerte
  constructor(public alertController: AlertController) {}
  
  // Liste des pays
  listePays = [
    // Uruguay
    { 
      nom_pays: "Uruguay",
      groupe: "A",
      surnom: "La céleste",
      selectionneur: "Oscar Tavarez",
      drapeau: "assets/img/Uruguay.png"
    },
    // Russie
    {
      nom_pays: "Russie",
      groupe: "A",
      surnom: "Sbornaïa",
      selectionneur: "Stanislav Cherchesov",
      drapeau: "assets/img/Russie.png"
    },
    // Arabie Saoudite
    {
      nom_pays: "Arabie Saoudite",
      groupe: "A",
      surnom: "Les faucons",
      selectionneur: "Juan Antonio Pizzi",
      drapeau: "assets/img/Arabie Saoudite.png"
    },
    // Egypte
    {
      nom_pays: "Egypte",
      groupe: "A",
      surnom: "Les pharaons",
      selectionneur: "Hector Cuper",
      drapeau: "assets/img/Egypte.png"
    },
    // Espagne    
    {
      nom_pays: "Espagne",
      groupe: "B",
      surnom: "La roja",
      selectionneur: "Fernando Hierro",
      drapeau: "assets/img/Espagne.png"
    },
    // Portugal
    {
      nom_pays: "Portugal",
      groupe: "B",
      surnom: "Seleção das Quinas",
      selectionneur: "Fernando Santos",
      drapeau: "assets/img/Portugal.png"
    },
    // Iran
    {
      nom_pays: "Iran",
      groupe: "B",
      surnom: "Shirants Perse",
      selectionneur: "Carlos Queiroz",
      drapeau: "assets/img/Iran.png"
    },
    // Maroc
    {
      nom_pays: "Maroc",
      groupe: "B",
      surnom: "Les lions de l'Atlas",
      selectionneur: "Hervé Renard",
      drapeau: "assets/img/Maroc.png"
    },
    // France
    {
      nom_pays: "France",
      groupe: "C",
      surnom: "Les bleus",
      selectionneur: "Didier Deschamps",
      drapeau: "assets/img/France.png"
    },
    // Danemark
    {
      nom_pays: "Danemark",
      groupe: "C",
      surnom: "Danisk Dynamite",
      selectionneur: "Age Hareide",
      drapeau: "assets/img/Danemark.png"
    },
    // Pérou
    {
      nom_pays: "Pérou",
      groupe: "C",
      surnom: "La blanqui roja",
      selectionneur: "Ricardo Gareca",
      drapeau: "assets/img/Pérou.png"
    },
    // Australie
    {
      nom_pays: "Australie",
      groupe: "C",
      surnom: "Les soceroos",
      selectionneur: "Bert van Marwijk",
      drapeau: "assets/img/Australie.png"
    },
    // Croatie
    {
      nom_pays: "Croatie",
      groupe: "D",
      surnom: "Vatreni",
      selectionneur: "Zlatko Dalic", 
      drapeau: "assets/img/Croatie.png"
    },
    // Argentine
    {
      nom_pays: "Argentine",
      groupe: "D",
      surnom: "La albiceleste",
      selectionneur: "Jorge Sampaoli",
      drapeau: "assets/img/Argentine.png"
    },
    // Nigeria
    {
      nom_pays: "Nigeria",
      groupe: "D",
      surnom: "Super eagles",
      selectionneur: "Gernot Rohr",
      drapeau: "assets/img/Nigeria.png"
    },
    // Islande
    {
      nom_pays: "Islande",
      groupe: "D",
      surnom: "Strakarnir okkar",
      selectionneur: "Helmir Hallgrimsson",
      drapeau: "assets/img/Islande.png"
    },
    // Brésil
    {
      nom_pays: "Brésil",
      groupe: "E",
      surnom: "Auriverdes",
      selectionneur: "Tite",
      drapeau: "assets/img/Brésil.png"
    },
    // Suisse
    {
      nom_pays: "Suisse",
      groupe: "E",
      surnom: "La nati",
      selectionneur: "Vladimir Petkovic",
      drapeau: "assets/img/Suisse.png"
    },
    // Serbie
    {
      nom_pays: "Serbie",
      groupe: "E",
      surnom: "Les aigles blancs",
      selectionneur: "Mladen Krstajic", 
      drapeau: "assets/img/Serbie.png"
    },
    // Costa Rica
    {
      nom_pays: "Costa Rica",
      groupe: "E",
      surnom: "Los ticos",
      selectionneur: "Oscar Ramírez",
      drapeau: "assets/img/Costa Rica.png"
    },
    // Suède
    {
      nom_pays: "Suède",
      groupe: "F",
      surnom: "Les bleus et jaunes (Blagult)",
      selectionneur: "Janne Andersson",
      drapeau: "assets/img/Suède.png"
    },
    // Mexique
    {
      nom_pays: "Mexique",
      groupe: "F",
      surnom: "El tri",
      selectionneur: "Juan Osorio",
      drapeau: "assets/img/Mexique.png"
    },
    // Corée du Sud
    {
      nom_pays: "Corée du Sud",
      groupe: "F",
      surnom: "Taegeuk jeaonsa (les guerrieurs Taegeuk)",
      selectionneur: "Shin Tae-Young",
      drapeau: "assets/img/Corée du Sud.png"
    },
    // Allemagne
    {
      nom_pays: "Allemagne",
      groupe: "F",
      surnom: "Die National Mannschaft",
      selectionneur: "Joachim Löw",
      drapeau: "assets/img/Allemagne.png"
    },
    // Belgique
    {
      nom_pays: "Belgique",
      groupe: "G",
      surnom: "Les diables rouges",
      selectionneur: "Roberto Martínez",
      drapeau: "assets/img/Belgique.png"
    },
    // Angleterre
    {
      nom_pays: "Angleterre",
      groupe: "G",
      surnom: "Les trois lions",
      selectionneur: "Gareth Southgate",
      drapeau: "assets/img/Angleterre.png"
    },
    // Tunisie
    {
      nom_pays: "Tunisie",
      groupe: "G",
      surnom: "Les aigles de Carthage",
      selectionneur: "Nabil Maâloul",
      drapeau: "assets/img/Tunisie.png"
    },
    // Panama
    {
      nom_pays: "Panama",
      groupe: "G",
      surnom: "L'ouragan bleu",
      selectionneur: "Hernán Gómez",
      drapeau: "assets/img/Panama.png"
    },
    // Colombie
    {
      nom_pays: "Colombie",
      groupe: "H",
      surnom: "Los cafeteros",
      selectionneur: "Jose Peckerman",
      drapeau: "assets/img/Colombie.png"
    },
    // Japon
    {
      nom_pays: "Japon",
      groupe: "H",
      surnom: "Les samouraïs bleus",
      selectionneur: "Akira Nishino",
      drapeau: "assets/img/Japon.png"
    },
    // Sénégal
    {
      nom_pays: "Sénégal",
      groupe: "H",
      surnom: "Les lions",
      selectionneur: "Aliou Cissé",
      drapeau: "assets/img/Sénégal.png"
    },
    // Pologne
    {
      nom_pays: "Pologne",
      groupe: "H",
      surnom: "Les blancs et rouges",
      selectionneur: "Adam Nawalka",
      drapeau: "assets/img/Pologne.png"
    }    
  ];

  // Fonction d'affichage du nom du pays sélectionné
  afficherNomPays(nom_pays: string) {
    
    // Instanciation de la fenêtre d'alerte
    let alert = this.alertController.create({
      // Titre de l'alerte
      title: "Pays sélectionné",
      // Message de l'alerte
      message: nom_pays,
      // Boutons de la fenêtre d'alerte
      buttons: [
        {
          text: "Fermer"
        }
      ]
    });
    
    // Affichage de l'alerte
    alert.present()

  }

  // Fonction d'affichage de la fiche détaillée du pays sélectionné
  afficherDetailsPays(nom_pays: string, groupe: string, surnom: string, selectionneur: string) {
    
    // Instanciation de la fenêtre d'alerte
    let alert = this.alertController.create({
      // Titre de l'alerte
      title: "Détails sur le pays",
      // Message de l'alerte
      message: "Pays : " + nom_pays + "<br/>" + "Groupe : " + groupe + "<br/>" + "Surnom : " + surnom + "<br/>" + "Sélectionneur : "+ selectionneur,      
      // Boutons de la fenêtre d'alerte
      buttons: [
        {
          text: "Fermer"
        }
      ]
    });
    
    // Affichage de l'alerte
    alert.present()

  }

  // Fonction de suppression de la fiche du pays sélectionné
  supprimerFichePays(nom_pays: string) {
    
    // Instanciation de la fenêtre d'alerte
    let alert = this.alertController.create({
      // Titre de l'alerte
      title: "Suppression",
      // Message de l'alerte
      message: "Suppression impossible",
      // Boutons de la fenêtre d'alerte
      buttons: [
        {
          text: "Fermer"
        }
      ]
    });
    
    // Affichage de l'alerte
    alert.present()

  }

  // Fonction de modification de la fiche du pays sélectionné
  modifierFichePays(nom_pays: string) {
    
    // Instanciation de la fenêtre d'alerte
    let alert = this.alertController.create({
      // Titre de l'alerte
      title: "Modification",
      // Message de l'alerte
      message: "Modification impossible",
      // Boutons de la fenêtre d'alerte
      buttons: [
        {
          text: "Fermer"
        }
      ]
    });
    
    // Affichage de l'alerte
    alert.present()

  }

}