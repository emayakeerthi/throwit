<?php
//establishing the connection with mongodb 
    require '../vendor/autoload.php';
    $mdb = new MongoDB\Client("mongodb://localhost:27017");
    //var_dump($mdb);

?>