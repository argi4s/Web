<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Name = $_POST['Name'];
    $Surname = $_POST['Surname'];
    $Username = $_POST['Username'];
    $PhoneNumber = $_POST['PhoneNumber'];
    $Password = $_POST['Password'];

    try {
        require_once "dbh.inc.php.php";

        $query = "INSERT INTO users (Name, Surname, Username, PhoneNumber, Password) VALUES (?, ?, ?, ?, ?);";

        $stmt = $pdo->prepare($query);

        $stmt->execute([$Name, $Surname, $Username, $PhoneNumber, $Password]);

        
        $pdo = null;
        $stmt = null;

        
        header("Location: register.html");
        die();
    } catch (PDOException $e) {
        
        die("Query failed: " . $e->getMessage());
    }
} else {
    
    header("Location: register.html");
    die();
}