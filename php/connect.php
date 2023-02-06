<?php

    //establishing the connection with mysql
    $server = "localhost:8111";
    $username = "root";
    $password = "password";
    $database = "throwit";

    $conn = new mysqli($server, $username, $password, $database);

    if($conn -> connect_error){
        die("Connect failed: " . $conn->connect_error);
    }

?>