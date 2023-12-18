<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="bootstrap.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row col-md-6 col-md-offset-3">
            <div class="card card-primary">
                <div class="card-header text-center">
                    <h1>User Login</h1>
                </div>
                <div class="card-body">
                    <form class="form-group" action="login.php" name="form" method="post" onsubmit="return loginValidated()">
                        <div class="form-group">
                            <label for="Username">Username</label>
                            <div><input type="text" class="form-control" name="Username" id="Username"></div>
                            <div id="Username_error">Please fill up your Username</div>
                        </div>

                        <div class="form-group">
                            <label for="Password">Password</label>
                            <div><input type="password" class="form-control" name="Password" id="Password"></div>
                            <div id="Password_error">Please fill up your Password</div>
                        </div>
                        <br>
                        <input type="submit" class="btn btn-primary" value="Login">
                        <br><br>
                        <p style="text-align: right;">Don't have an account? <a href="register.html">Register</a></p>
                    </form>
                    <?php
                        if (isset($_GET['invalid']) && $_GET['invalid'] == true) {
                            echo "<p style='color: red;'>Invalid credentials. Please try again.</p>";
                        }
                    ?>
                </div>
            </div>
        </div>
    </div>
    <script src="login_valid.js"></script>
</body>
</html>
