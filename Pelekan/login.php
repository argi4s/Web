<?php
if (isset($_POST['Username']) && isset($_POST['Password'])) {
    $Username = $_POST['Username'];
    $Password = $_POST['Password'];

    
    require_once "dbh.inc.php.php";

    $query = "SELECT * FROM users WHERE Username = ? AND Password = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$Username, $Password]);

    $rows = $stmt->rowCount();

    $pdo = null;
    $stmt = null;

    if ($rows == 1) {
        header("Location: home.html");
        die();
    } else {
        header("Location: login_form.php?invalid=true");
        die();
    }
} else {
    header("Location: login_form.php");
    die();
}
?>

       


       
       
       
       
       
       
       
       
       
       
       
      
