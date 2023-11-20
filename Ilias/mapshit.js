// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (in this case, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers and popups
var markers = [
    { coordinates: [51.505, -0.09], content: 'Base' },
    { coordinates: [51.515, -0.1], content: 'Popup 2' },
    { coordinates: [51.495, -0.1], content: 'Popup 3' }
];

markers.forEach(function (marker) {
    var newMarker = L.marker(marker.coordinates).addTo(map);
    newMarker.bindPopup(marker.content);
});

