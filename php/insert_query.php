<?php

    include "mdb_connect.php";

    $query = $_POST['query'];

    $db = $mdb -> throwit;

    $queries = $db -> queries;

    $docs = $queries->find([]);
    $lastone = null;
    foreach($docs as $doc){
        $lastone = $doc['query_id'];
    }

    $query_id = "QID".(string)((int)substr($lastone,3)+1);

    echo $query;

    $document = $queries->insertOne([
        'query' => $query,
        'query_id' => $query_id,
        'date' => date("d/m/Y"),
        'event_id' => "EID001"
    ]);

    $doc = $queries -> find(array("query_id"=>$query_id));

    if(!empty($doc)){
        echo true;
    }
    else{
        echo false;
    }

?>