function validateRegistrationForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
	var Street = document.getElementById("Street").value;
	var Number = document.getElementById("Number").value;
	var FirstName = document.getElementById("FirstName").value;
	var LastName = document.getElementById("LastName").value;
	var PhoneNumber = document.getElementById("PhoneNumber").value;
	
    if (username.trim() === "") {
        alert("Username cannot be empty");
        return false;
    }
	
    if (password.trim() === "") {
        alert("Password cannot be empty");
        return false;
    }
	
    if (password!==password2){
        alert("Password does not match");
        return false;
    }
	
    if (Street.trim() === "") {
        alert("Street cannot be empty");
        return false;
    }
	
    if (Number.trim() === "") {
        alert("Number cannot be empty");
        return false;
    }
	
    if (FirstName.trim() === "") {
        alert("First Name cannot be empty");
        return false;
    }
	
    if (LastName.trim() === "") {
        alert("Last Name cannot be empty");
        return false;
    }
	
    if (PhoneNumber.trim() === "") {
        alert("Phone Number cannot be empty");
        return false;
    }
	
    else {
        alert("Account Created Successfully");
        window.location.href = 'login.html';
        return true;
    }
}
