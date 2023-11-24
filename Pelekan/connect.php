<?php
    $username = $_POST['username'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $phoneNumber = $_POST['phoneNumber'];




    //database connection
    $conn = new mysqli('localhost','root','','base');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into users(,password1,password2,firstname,lastname,phoneNumber)
            values(? ,? ,? ,? ,? ,?)")
        $stmt->bind_param("sssssi",$username,$password1,$password2,$firstname,$lastname,$phoneNumber);
        $stmt->execute();
        echo "registration succesfully"
        $stmt->close();
        $conn->close();
    }

?>
