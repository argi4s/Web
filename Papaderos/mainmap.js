var map = L.map('map').setView([51.505, -0.09], 13);

var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Layer 1'
}).addTo(map);

var layer2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Layer 2'
}).addTo(map);

var layer3 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Layer 3'
});

var baseLayers = {
	"Layer 1": sketo,
    "Layer 2": lifthedaaitimata,
    "Layer 1": ekkremhaitimata
};

L.control.layers(baseLayers).addTo(map);

function toggleLayer(layerId) {
    var layer = eval(layerId);
    if (map.hasLayer(layer)) {
        map.removeLayer(layer);
    } else {
        map.addLayer(layer);
    }
}

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
    .bindPopup("den doulevei gamw");
});