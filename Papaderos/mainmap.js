var oxhmaIcon = L.icon({
    iconUrl: 'oxhmaIcon.png', 
    iconSize: [32, 32],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var prosforaIcon = L.icon({
    iconUrl: 'prosforaIcon.png', 
    iconSize: [32, 32],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var lifthenAitimaIcon = L.icon({
    iconUrl: 'lifthenAitimaIcon.png', 
    iconSize: [32, 32],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var ekkremesAitimaIcon = L.icon({
    iconUrl: 'ekkremesAitimaIcon.png', 
    iconSize: [32, 32],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var map = L.map('map').setView([51.505, -0.09], 13);

var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Layer 1'
}).addTo(map);

var marker2 = L.marker([51.501, -0.09], { icon: lifthenAitimaIcon }).bindPopup('kapoio lifthen aitima');
var marker3 = L.marker([51.509, -0.088], { icon: ekkremesAitimaIcon }).bindPopup('ekkremes aitima');
var marker4 = L.marker([51.512, -0.086], { icon: prosforaIcon }).bindPopup('prosfora');
var marker5 = L.marker([51.498, -0.093], { icon: oxhmaIcon }).bindPopup('oxhma');
var marker6 = L.marker([51.505, -0.099]).bindPopup('as poume diadromi');

var layer2 = L.layerGroup([marker2]);
var layer3 = L.layerGroup([marker3]);
var layer4 = L.layerGroup([marker4]);
var layer5 = L.layerGroup([marker5]);
var layer6 = L.layerGroup([marker6]);

var baseLayers = {
	"Layer 1": layer1
}; 

var overLays = {
	"Layer 2": layer2,
	"Layer 3": layer3,
	"Layer 4": layer4,
	"Layer 5": layer5,
	"Layer 6": layer6
};

L.control.layers(baseLayers, overLays).addTo(map);

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
