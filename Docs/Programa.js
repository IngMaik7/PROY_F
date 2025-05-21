var map = L.map('map').setView([4.611755, -74.083450], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.611755, -74.083450]).addTo(map);

var poligono = L.polygon([
      [4.618406, -74.088302],
      [4.616113, -74.085981],
      [4.611950, -74.089324],
      [4.614236, -74.091899]
      ]).addTo(map);
