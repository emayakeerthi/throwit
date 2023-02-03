<?php
//establishing the connection with mongodb 
    //require 'C:\xampp\php\PEAR\vendor\autoload.php';
    $mdb = new MongoDB\Driver\Manager("mongodb://localhost:27017");
    var_dump($mdb);

?>