// Import de classes (système)
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

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
  // NB : Classe héritant des superclasses :
  //      - NavController : Gestionnaire de navigation entre les pages
  //      - SQLite : Gestionnaire de BDD SQLite 
  constructor(public navCtrl: NavController, private sqlite: SQLite) {}

  // Variables de la classe
  identifiant = "";
  listeIdentifiants = [];
  
  // Fonction sauvegarderIdentifiant
  // NB : Sauvegarde de l'identifiant dans le BDD SQLite
  sauvegarderIdentifiant() {

    // Création de la BDD SQLite
    this.sqlite.create({
      // Nom de la BDD SQLite
      name: "ma_bdd.db",
      // Localisation par défaut de la BDD SQLite 
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      
      // Création de la BDD SQLite data.db
      db.executeSql("CREATE TABLE IF NOT EXISTS table_identifiants(id INTEGER PRIMARY KEY AUTOINCREMENT, identifiant)")
      .then(() => alert("Création (ou détection) de la BDD data.db : Succès"))
      .catch(e => console.log(e));
    
      // Insertion d'un username dans la BDD SQLite
      db.executeSql("INSERT INTO table_identifiants(identifiant) VALUES(?)", [this.identifiant])
      .then(() => alert("Insertion " + [this.identifiant] + " dans la table SQLite table_identifiants : Succès"))
      .catch(e => console.log(e));

      // Liste des enregistrements de la table SQLite table_identifiants
      db.executeSql("SELECT * FROM table_identifiants", this.newMethod()).then((data) => {
        
        // Affichages de contrôle (alert)
        alert("Nombre d'identiant(s) : " + data.rows.length);
        alert("Identifiant n°1 : "+ data.rows.item(1).identifiant);

        // Initialisation du tableau liste_identifiants
        this.listeIdentifiants = [];

        // Remplissage du tableau liste_identifiants
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            // Affichage de contrôle (alert)
            alert(data.rows.item(i).identifiant);
            // Mise en tableau
            this.listeIdentifiants.push({identifiant: data.rows.item(i).identifiant});
          }
        }
      }, (err) => {
        // Affichage de contrôle (alert)
        alert("Echec d'exécution SQL : " + JSON.stringify(err));
      });
    })
    // Message d'erreur
    .catch(e => alert(JSON.stringify(e)));

  }


  private newMethod_1(): any[] {
    return {};
  }

  private newMethod(): any[] {
    return {};
  }
}