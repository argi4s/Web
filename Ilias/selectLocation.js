// Initialize the map
var map = L.map('map').setView([37.983, 23.727], 12);

// Add a tile layer (in this case, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var lat;//ta orizw ws global gia na mporw na ta xrhsimopoihsw sth changeMapView
var long;
var accuracy;
if (!navigator.geolocation) {
    console.log("Your browser does not support geolocation.")
} else {
    navigator.geolocation.getCurrentPosition(function (position) {
        getPosition(position);
        changeMapView(lat, long, 14);
    });
}

function getPosition(position) {
    //console.log(position);
    lat = position.coords.latitude;
    long = position.coords.longitude;
    accuracy = position.coords.accuracy;

    var marker = L.marker([lat, long])
    var circle = L.circle([lat, long], { radius: accuracy + 450 })//+400 gia na fainetai kalutera

    var featureGroup = L.featureGroup([marker, circle]).addTo(map)//exei mazi ta apo panw

    map.fitBounds(featureGroup.getBounds())
    console.log("Your coordinate is: " + lat + " north and " + long + " west and accuracy " + accuracy);

    var marker2 = L.marker([lat + 0.0308, long + 0.0545]).addTo(map);

    useLatLongOutsideFunction(lat, long);
}

function useLatLongOutsideFunction(lat, long) {
    var marker = L.marker([lat + 0.001, long], {
        draggable: true,
        title: "Click to drag and discover your location",
        opacity: 0.6,
    }).addTo(map);

    marker.bindPopup("<h1>Your position is:</h1><p>Latitude: " + lat + " Longitude: " + long + "</p>");

    marker.on('dragend', function (event) {
        var marker = event.target;
        var newLat = marker.getLatLng().lat;
        var newLong = marker.getLatLng().lng;

        // Update the popup me nea coords
        marker.setPopupContent("<h1>Your position is:</h1><p>Latitude: " + newLat + " Longitude: " + newLong + "</p>").openPopup();
    });
}
//Na deixnei poso zoomed eisai
L.control.scale().addTo(map)

//fullscreen
var mapId= document.getElementById("map");
function fullScreenView(){
    mapId.requestFullscreen();
}

//display map coords
map.on("mousemove",function(e){
    console.log(e)
    $(".coordinate").html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})