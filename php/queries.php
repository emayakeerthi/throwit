<?php

    include "mdb_connect.php";

    //connecting database
    $db = $mdb->throwit;

    //connecting collections
    $queries = $db->queries;

    $event_id = "EID001";

    //fetching all the records
    $documents = $queries -> find(['event_id'=>$event_id]);
    $events = $db -> events -> find(["event_id"=>$event_id]);
    //echo gettype($documents);
    $data = [];
    
    foreach($events as $event){
        $data[] = $event['title'];
    }
    foreach ($documents as $doc) {
        $temp = [];
        $temp['query'] = $doc['query'];
        $temp['query_id'] = $doc['query_id'];
        $temp['event_id'] = $doc['event_id'];
        $temp['date'] = $doc['date'];
        $data[] = $temp;
    }
    //$data['title'] =  
    echo json_encode($data);
    
    // foreach($documents as $document){
    //     echo json_encode($document);
    // }
?>