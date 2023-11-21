function validateRegistrationForm() {
    var username = document.getElementById("username").value;
    var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	
    if (username.trim() === "") {
        alert("Username cannot be empty");
        return false;
    }
	
    if (password1.trim() === "") {
        alert("Password cannot be empty");
        return false;
    }
	
    if (password1!==password2){
        alert("Password does not match");
        return false;
    }

    if (firstName.trim() === "") {
        alert("First Name cannot be empty");
        return false;
    }
	
    if (lastName.trim() === "") {
        alert("Last Name cannot be empty");
        return false;
    }
	
    if (phoneNumber.trim() === "") {
        alert("Phone Number cannot be empty");
        return false;
    }
return true;
}

function validateAndNavigate() {
    var isValid = validateRegistrationForm();
    if (isValid) {
		sessionStorage.setItem('username', document.getElementById('username').value);
        sessionStorage.setItem('password1', document.getElementById('password1').value);
        sessionStorage.setItem('password2', document.getElementById('password2').value);
        sessionStorage.setItem('firstName', document.getElementById('firstName').value);
        sessionStorage.setItem('lastName', document.getElementById('lastName').value);
        sessionStorage.setItem('phoneNumber', document.getElementById('phoneNumber').value);
        window.location.href = "signupmap.html";
    }
}

function recoverData() {
	var username = sessionStorage.getItem('username');
    var password1 = sessionStorage.getItem('password1');
    var password2 = sessionStorage.getItem('password2');
    var firstName = sessionStorage.getItem('firstName');
    var lastName = sessionStorage.getItem('lastName');
    var phoneNumber = sessionStorage.getItem('phoneNumber');
}

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker;
var chosenLatitude, chosenLongitude;

map.on('click', function (e) {
	if (marker) {
        map.removeLayer(marker);
    }
    var clickedLatLng = e.latlng;
    chosenLatitude = clickedLatLng.lat;
    chosenLongitude = clickedLatLng.lng;
	L.marker([chosenLatitude, chosenLongitude]).addTo(map)
        .bindPopup("You're here");
});

function createAccount() {
	if (chosenLatitude.trim() === "") {
        alert("Please select your location on the map");
        return false;
    }
	else {
	recoverData();
	alert("Account created successfully");
	window.location.href = "login.html";
	}
}
	