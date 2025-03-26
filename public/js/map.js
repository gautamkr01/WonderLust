const locationIQKey = mapToken;

// Initialize the map
// const map = L.map("map").setView([24.9339, 83.6521], 10); // Default: New Delhi, India

// // Add LocationIQ tile layer
// L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);
// L.marker([24.9339, 83.6521]).addTo(map);
let cords = [coordinate[1], coordinate[0]];

const map = L.map("map").setView(cords, 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const defaultIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -40]
});

const hoverIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -40]
});

// Add marker with event listeners
const marker = L.marker(cords, { icon: defaultIcon }).addTo(map).bindPopup(listingLocation).openPopup();

// Show popup and change icon on hover
marker.on('mouseover', function () {
  marker.setIcon(hoverIcon);
  marker.bindPopup("Exact Location will be provided after booking!").openPopup();
});

// Restore icon when not hovering
marker.on('mouseout', function () {
  marker.setIcon(defaultIcon);
  marker.closePopup();
  marker.bindPopup(listingLocation);
  marker.openPopup();
});


// L.marker(cords, { icon: defaultIcon })
//   .addTo(map)
//   .bindPopup(listingLocation)
//   .openPopup();

