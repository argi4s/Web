<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Retrieve hashed password from your database based on the username
    // Example: $hashedPassword = $database->select("users", "password", ["username" => $username]);

    // Dummy hashed password for demonstration purposes
    $dummyHashedPassword = password_hash("securepassword", PASSWORD_DEFAULT);

    // Verify the password
    if (password_verify($password, $dummyHashedPassword)) {
        // Password is correct, perform login actions

        // Redirect to main.html after successful login
        header("Location: main.html");
        exit();
    } else {
        // Password is incorrect, display an error message
        echo "Incorrect username or password";
    }
}
?>