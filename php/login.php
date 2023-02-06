<?php

    include 'connect.php';
    include 'mdb_connect.php';

    // Receiving values from form
    $id = $_POST["id"];
    $pswd = $_POST["pswd"];

    // connecting with database and reterive password
    $sql = "SELECT pswd from access_credentials where id = ?";

    $stmt = $conn -> prepare($sql);
    $stmt->bind_param('s', $id);
    $stmt->execute();

    //extract password from fetched tuple
    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    $ret_pswd = $data["pswd"];

    //comparing the given password and reterived password
    if($pswd == $ret_pswd){
        $redis->set("session_id", $id);
        echo true;
    }
    else{
        echo false;
    }

?>