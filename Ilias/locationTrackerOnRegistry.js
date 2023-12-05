//Edw tha ektelountai automata, meta apo successful register, gia na parei thn topothesia tou


// Initialize the map
var map = L.map('map').setView([37.983, 23.727], 12);

// Add a tile layer (in this case, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var lat;//ta orizw ws global gia na mporw na ta xrhsimopoihsw sth changeMapView
var long;
var accuracy;
if (!navigator.geolocation) {//gia na zhthsei thn topothesia
    console.log("Your browser does not support geolocation.")
} else {
    navigator.geolocation.getCurrentPosition(function (position) {
        getPosition(position);
        
    });
}

function getPosition(position) {
    //console.log(position);
    lat = position.coords.latitude;
    long = position.coords.longitude;
    accuracy = position.coords.accuracy;

    var marker = L.marker([lat, long]).addTo(map)
    
    useLatLongOutsideFunction(lat, long);
    testarw(lat,long);
    //mporeis na pareis to lat long tou xrhsth kai na to kaneis oti thes----------------------------------------------
    //skopos na steileis lat kai long kapws sth bash isws kai na mporoume na ta paroume meta
}

function useLatLongOutsideFunction(lat, long) {
    map.setView([lat,long], accuracy);

    console.log("Your coordinate is: " + lat + " north and " + long + " west and accuracy " + accuracy)

    }
    function testarw(lat,long){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaainate is: " + lat + " north and " + long + " west and accuracy " + accuracy)
    }
    