<?php

    include "mdb_connect.php";

    //connecting database
    $db = $mdb->throwit;

    //connecting collections
    $collections = $db->queries;


    //fetching all the records
    $documents = $collections -> find(['event_id'=>"EID002"]);
    //echo gettype($documents);
    $data = [];
    foreach ($documents as $doc) {
        $temp = [];
        $temp['query'] = $doc['query'];
        $temp['query_id'] = $doc['query_id'];
        $temp['event_id'] = $doc['event_id'];
        $data[] = $temp;
    }
    echo json_encode($data);
    
    // foreach($documents as $document){
    //     echo json_encode($document);
    // }
?>