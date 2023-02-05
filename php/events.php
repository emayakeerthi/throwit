<?php

    include "mdb_connect.php";

    //connecting database
    $db = $mdb->throwit;

    //connecting collections
    $collections = $db->events;


    //fetching all the records
    $documents = $collections -> find([]);

    //echo gettype($documents);
    $data = [];
    foreach ($documents as $doc) {
        $temp = [];
        $temp['title'] = $doc['title'];
        $temp['event_id'] = $doc['event_id'];
        //$t['oldMain'] = $doc['oldMain'];
        $data[] = $temp;
    }
    echo json_encode($data);
    
    // foreach($documents as $document){
    //     echo json_encode($document);
    // }
?>