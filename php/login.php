<?php

$server = "localhost";
$username = "throwit";
$password = "password";
$database = "throwit";

$conn = new mysqli($server, $username, $password, $database);

if($conn -> connect_error){
    die("Connect failed: " . $conn->connect_error);
}
else{
    echo "Working fine";
}

?>