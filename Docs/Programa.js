var map = L.map('map').setView([4.611998, -74.083205], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.611998, -74.083205]).addTo(map);

var circle = L.circle([4.611998, -74.083205], {
    color: 'green',
    fillColor: '#f02',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);



