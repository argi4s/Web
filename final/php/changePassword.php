<?php
include "dbConn.php";
session_start();

$id = $_SESSION['user_id'];

if (isset($_POST['newPassword'])) {
    $new = $_POST['newPassword'];
    $hashedNewPassword = password_hash($new, PASSWORD_DEFAULT);
    $query = "UPDATE users SET password='" . $hashedNewPassword . "' WHERE user_id=" . $id;

    if ($link->query($query) === TRUE) {
        echo 0;
    } else {
        echo 1;
    }

} else {
    echo 2;
}
?>
