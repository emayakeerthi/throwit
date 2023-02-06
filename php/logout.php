<?php
    include "mdb_connect.php";

    $redis->del("session_id");

    if(!$redis->get("session_id")){
        echo true;
    }
    else{
        echo false;
    }
?>