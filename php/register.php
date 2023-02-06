<?php
    include "connect.php";

    $name = $_POST['name'];
    $id = $_POST['id'];
    $email = $_POST['email'];
    $pswd = $_POST['password'];

    $sql = "SELECT id FROM access_credentials";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $result = $stmt->get_result();
    while($data = $result->fetch_assoc()){
        if($data['id']==$id){
            echo false;
            exit;
        }
    }
    
    $sql = "INSERT INTO access_credentials(id, name, email, pswd) VALUES(?,?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss",$id, $name, $email, $pswd);
    $stmt->execute();
    echo true;

    //connecting mongodb to store the profile data
    //$mongo = new MongoDB\Driver\Manager("mongodb://localhost:27017");
    

?>