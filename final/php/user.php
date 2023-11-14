<?php
session_start();
include "dbConn.php";

$user_id = $_SESSION['user_id'];
$result = array();
$query = "SELECT username, score, overallScore, tokens, overallTokens, likes, dislikes FROM users WHERE user_id = '$user_id'";
$response = mysqli_query($link, $query);

if(mysqli_num_rows($response) > 0) {
    while($row = mysqli_fetch_assoc($response)) {
        array_push($result, array(
            'username' => $row['username'],
            'score' => $row['score'],
            'overallScore' => $row['overallScore'],
            'tokens' => $row['tokens'],
            'overallTokens' => $row['overallTokens'],
            'likes' => $row['likes'],
            'dislikes' => $row['dislikes']
        ));
    }
}

echo json_encode($result, true);
?>
