<?php

    /*
    Nom du script : chartjs_doughnut.php
    Auteur : Christian VIGOUROUX
    Date de création : 30/07/2018
    Date de dernière modification : 30/07/2018
    Objet : Renvoi des paramètres d'un graphique chart.js
            de type doughnut à l'application cliente
    */

    // Directives de contrôle d'accès
    // NB : Le rôle de chacune de ces directives est expliqué en détail
    //      détail sur https://developer.mozilla.org/fr/docs/Web/HTTP
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }  

    // Autorisation d'accès depuis une application stockée
    // sur un autre serveur
    // NB : Commande non utile dans le contexte
    //      d'utilisation de ce script
    header("Access-Control-Allow-Origin: *");

    // Réponse JSON attendue de la part du script
    // NB : Commande non utile dans le contexte
    //      d'utilisation de ce script
   header("Content-Type: application/json");

    //
    // Envoi du résultat au client
    //
    // Préparation des données JSON
    $donneesJSON = '{
      "type_graphique": "doughnut",
      "libelle_graphique": "Nombre de buts",
      "labels": [
        "KANE",
        "MBAPPE",
        "LUKAKU",
        "CHERISHEV",
        "RONALDO",
        "GRIEZMANN"
      ],      
      "donnees": [6, 4, 4, 4, 4, 4],
      "backgroundColor": [
        "rgba(105, 105, 105)",
        "rgba(128, 128, 128)",
        "rgba(169, 169, 169)",
        "rgba(192, 192, 192)",
        "rgba(211, 211, 211)",
        "rgba(220, 220, 220)"
      ],
      "borderColor": [
        "rgba(0, 0, 0)",
        "rgba(0, 0, 0)",
        "rgba(0, 0, 0)",
        "rgba(0, 0, 0)",
        "rgba(0, 0, 0)",
        "rgba(0, 0, 0)"]
    }';
    // Envoi des données JSON à l'application client
    echo $donneesJSON;

?>