<?php

    include "mdb_connect.php";


    //fetching all the documents
    try {
        $filter = [];
        $options = [];

        // Query to find inserts in a specific collection
        $query = new MongoDB\Driver\Query($filter, $options);
        $cursor = $mdb->executeQuery('throwit.events', $query);

        //responding to the request made by the js
        foreach ($cursor as $document) {
            var_dump($document);
        }
    }
    catch (Throwable $e) {
        echo "Captured Throwable: for insert : " . $e->getMessage() . PHP_EOL;
    }

?>