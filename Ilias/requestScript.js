// Initialize the map for request form
var requestMap = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (in this case, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(requestMap);

var requestMarker;

// Add a click event to the map to select a point
requestMap.on('click', function (e) {
    if (requestMarker) {
        requestMap.removeLayer(requestMarker);
    }

    // Add a marker to the selected point
    requestMarker = L.marker(e.latlng).addTo(requestMap);

    // Update hidden input fields with selected coordinates
    document.getElementById('selectedLat').value = e.latlng.lat;
    document.getElementById('selectedLng').value = e.latlng.lng;
});

function submitRequest() {
    // Get the request details from the form
    var requestDetails = document.getElementById('requestInput').value;
    var selectedLat = document.getElementById('selectedLat').value;
    var selectedLng = document.getElementById('selectedLng').value;

    // Create a new card with the request details
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = '<strong>Request:</strong><br>' + requestDetails + '<br>' +
        '<strong>Location:</strong><br>Latitude: ' + selectedLat + '<br>Longitude: ' + selectedLng;

    // Append the new card to the cards container in index.html
    var cardsContainer = parent.document.getElementById('cards-container');
    cardsContainer.appendChild(card);

    // Close the request form window (assuming it's opened in a new window/tab)
    window.close();
}