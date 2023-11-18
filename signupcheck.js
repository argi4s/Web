
        // Function to validate the registration form
        function validateRegistrationForm() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Check if username is empty trim() removes whitespaces
            if (username.trim() === "") {
                alert("Username cannot be empty");
                return false;
            }

            // Check if password is empty
            if (password.trim() === "") {
                alert("Password cannot be empty");
                return false;
            }

            //Check if password and password2 are the same
            if(password!==password2){
                alert("Password does not match");
                return false;
            }


            return true;
        }
    
