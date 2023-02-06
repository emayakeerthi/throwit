<?php

    include "mdb_connect.php";

    $event_id = $_POST['event_id'];

    $redis->set("event_id", $event_id);

    if($redis->get("event_id")){
        echo true;
    }
    else{
        echo false;
    }
?>