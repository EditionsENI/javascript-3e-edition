<?php

    /*
    Nom du script : chartjs_bar.php
    Auteur : Christian VIGOUROUX
    Date de création : 01/01/2017
    Date de dernière modification : 01/01/2017
    Objet : Renvoi des paramètres d'un graphique chart.js de type bar à l'application cliente
            Données extraites de tables MySQL
    */

    //http://stackoverflow.com/questions/18382740/cors-not-working-php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }  

    // Autorisation d'accès depuis une application stockée sur un autre serveur
    // header("Access-Control-Allow-Origin: *");

    // Réponse JSON attendue de la part du script
    // header("Content-Type: application/json");

    //
    // Envoi du résultat au client
    //
    // $donneesJSON = '{
    //     "type_graphique": "bar"
    // }';
    $donneesJSON = '{
      "type_graphique": "bar",
      "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      "libelle_graphique": "Intentions de votes",
      "donnees": [12, 19, 3, 5, 2, 3],
      "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
      "borderColor": ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"]
    }';
    // Envoi des données JSON à l'application client
    echo $donneesJSON;

?>