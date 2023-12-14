var Name = document.forms['form']['Name'];
var Name = document.forms['form']['Name'];
var Surname = document.forms['form']['Surname'];
var Username = document.forms['form']['Username'];
var PhoneNumber = document.forms['form']['PhoneNumber'];
var Password = document.forms['form']['Password'];

var Name_error = document.getElementById('Name_error');
var Surname_error = document.getElementById('Surname_error');
var Username_error = document.getElementById('Username_error');
var PhoneNumber_error = document.getElementById('PhoneNumber_error');
var Password_error = document.getElementById('Password_error');


Name.addEventListener('textInput', Name_Verify);
Surname.addEventListener('textInput', Surname_Verify);
Username.addEventListener('textInput', Username_Verify);
PhoneNumber.addEventListener('textInput', PhoneNumber_Verify);
Password.addEventListener('textInput', Password_Verify);

const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let marker;
let chosenLatitude, chosenLongitude;

map.on('click', function (e) {
    if (marker) {
        map.removeLayer(marker);		
}
    let clickedLatLng = e.latlng;
	chosenLatitude = clickedLatLng.lat;
    chosenLongitude = clickedLatLng.lng;
    marker = L.marker([chosenLatitude, chosenLongitude]).addTo(map)
    .bindPopup("Marker Position: " + chosenLatitude + ", " + chosenLongitude);
	document.getElementById('chosenLatitude').value = chosenLatitude;
    document.getElementById('chosenLongitude').value = chosenLongitude;
});

function registration_validated(){
    if(Name.value.length < 3){
       Name.style.border = "1px solid red";
       Name_error.style.display="block";
       Name.focus();
       return false;
    }
    if(Surname.value.length < 3){
        Surname.style.border = "1px solid red";
        Surname_error.style.display="block";
        Surname.focus();
        return false;
     }
     if(Username.value.length < 3){
        Username.style.border = "1px solid red";
        Username_error.style.display="block";
        Username.focus();
        return false;
     }
     if(PhoneNumber.value.length < 10 ){
        PhoneNumber.style.border = "1px solid red";
        PhoneNumber_error.style.display="block";
        PhoneNumber.focus();
        return false;
     }
     if(Password.value.length < 8){
        Password.style.border = "1px solid red";
        Password_error.style.display="block";
        Password.focus();
        return false;
     }
}



function Name_Verify(){
    if(Name.value.length >= 3){
       Name.style.border = "1px solid silver";
       Name_error.style.display = "none";
       return true;
    }
}

function Surname_Verify(){
    if(Surname.value.length >= 3){
       Surname.style.border = "1px solid silver";
       Surname_error.style.display = "none";
       return true;
    }
}


function Username_Verify(){
    if(Username.value.length >= 3){
       Username.style.border = "1px solid silver";
       Username_error.style.display = "none";
       return true;
    }
}

function PhoneNumber_Verify(){
    if(PhoneNumber.value.length = 10){
       PhoneNumber.style.border = "1px solid silver";
       PhoneNumber_error.style.display = "none";
       return true;
    }
}

function Password_Verify(){
    if(Password.value.length >= 8){
       Password.style.border = "1px solid silver";
       Password_error.style.display = "none";
       return true;
    }
}


