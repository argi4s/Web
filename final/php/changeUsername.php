<?php

include "dbConn.php";

session_start();
$id = $_SESSION['user_id'];

if (isset($_POST['newUsername'])) {
    $new = ($_POST['newUsername']);
    $username = mysqli_query($link,"SELECT * FROM USERS WHERE USERNAME = '$new'");

    if (mysqli_num_rows($username) === 1)  {
        echo 3;
        exit();
    }
    $query = "UPDATE users SET username='$new' WHERE user_id=$id";
    $result = mysqli_query($link, $query);

    if ($result) {
        $_SESSION['username'] = $new;
        echo 0;
    } else {
        echo 1;
    }
} else {
    echo 2;
}
?>
