<?php

    include "mdb_connect.php";

    //connecting database
    $db = $mdb->throwit;

    //connecting collections
    $collections = $db->events;

 
    //fetching all the records
    $documents = $collections -> find([]);
    $data = [];
    foreach ($documents as $doc) {
        $temp = [];
        if(strtotime($doc['date']) > strtotime(date("d/m/Y"))){
            $temp['title'] = $doc['title'];
            $temp['event_id'] = $doc['event_id'];
            $temp['organizer'] = $doc['organizer'];
            $temp['speaker'] = $doc['Speaker'];
            $temp['date'] = $doc['date'];
        }
        $data[] = $temp;
    }
    echo json_encode($data);
    
?>