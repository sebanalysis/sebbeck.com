var map = L.map('map').setView([54.0, -2.0], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

var locations = [
    [54.0, -2.0],
    [54.1, -2.1],
    [54.2, -2.2],
    // ... more coordinates
];

var circles = [];

for (var i = 0; i < locations.length; i++) {
    var circle = L.circle(locations[i], {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    circles.push(circle);
}
