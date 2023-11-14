<?php
include "dbConn.php";
session_start();

$firstDate = $_POST["firstDate"];
$lastDate = $_POST["lastDate"];

$discounts = [];

$query = "SELECT discount_id, date FROM discounts WHERE date > '$firstDate' AND date < '$lastDate' ORDER BY date ASC";
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $discounts[] = ['discount_id' => $row['discount_id'], 'date' => $row['date']];
}

echo json_encode($discounts);
?>
