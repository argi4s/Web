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

        


        $query = "INSERT INTO politis (Username) VALUES (?);";

        $stmt = $pdo->prepare($query);

        $stmt->execute([$Username]);

        
        $pdo = null;
        $stmt = null;

        
        header("Location: login_form.php");
        die();
    } catch (PDOException $e) {
        
        die("Query failed: " . $e->getMessage());
    }
} else {
    
    header("Location: register.html");
    die();
}
