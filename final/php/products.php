<?php
    include "dbConn.php";
    session_start();

    // Get the product IDs from the query parameters
    $ids = isset($_GET['ids']) ? $_GET['ids'] : '';

    // The IN clause in SQL can accept comma-separated values directly
    $sql = "SELECT `product_id`, `product_name` FROM `products` WHERE `product_id` IN ($ids)";

    $result = mysqli_query($link, $sql);
    $products = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $products[] = $row;
    }

    echo json_encode($products);
?>
