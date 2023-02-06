<?php
//establishing the connection with mongodb 
    require '../vendor/autoload.php';
    $mdb = new MongoDB\Client("mongodb://localhost:27017");
    // //var_dump($mdb);

    $redis = new Predis\Client();
    $redis->connect('127.0.0.1', 6379);
?>