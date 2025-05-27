document.addEventListener("DOMContentLoaded", function () {
  // Base tile layer for all maps
  const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  });

  // Create the single map
  const adventureMap = L.map('map-adventure').setView([20.4475, 121.9702], 13);
  baseLayer.addTo(adventureMap);

  // Layer groups for hiking, biking, and sports
  const hikingLayer = L.layerGroup();
  const bikingLayer = L.layerGroup();
  const sportsLayer = L.layerGroup();

  // Hiking Trails
  L.marker([20.4505, 121.9696], {icon: L.icon({iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854878.png', iconSize: [25, 41], iconAnchor: [12, 41]})})
    .bindPopup('<b>Mt. Iraya Trailhead</b><br>Start your hike here!')
    .addTo(hikingLayer);

  L.polyline([
    [20.4505, 121.9696],
    [20.4550, 121.9730],
    [20.4600, 121.9700]
  ], {color: 'green'}).bindPopup('Mt. Iraya Hiking Trail').addTo(hikingLayer);

  // Biking Routes
  L.marker([20.4390, 121.9710], {icon: L.icon({iconUrl: 'https://cdn-icons-png.flaticon.com/512/743/743922.png', iconSize: [25, 41], iconAnchor: [12, 41]})})
    .bindPopup('<b>Ivana Start Point</b><br>Start your bike ride here!')
    .addTo(bikingLayer);

  L.polyline([
    [20.4390, 121.9710],
    [20.4420, 121.9750],
    [20.4450, 121.9780],
    [20.4480, 121.9800]
  ], {color: 'blue'}).bindPopup('Ivana to Uyugan Bike Trail').addTo(bikingLayer);

  // Sports Activities
  L.marker([20.4300, 121.9650], {icon: L.icon({iconUrl: 'https://cdn-icons-png.flaticon.com/512/888/888879.png', iconSize: [25, 41], iconAnchor: [12, 41]})})
    .bindPopup('<b>Sabtang Island Dock</b><br>Watersports and boat rides start here.')
    .addTo(sportsLayer);

  L.marker([20.4350, 121.9750], {icon: L.icon({iconUrl: 'https://cdn-icons-png.flaticon.com/512/888/888879.png', iconSize: [25, 41], iconAnchor: [12, 41]})})
    .bindPopup('<b>Valugan Boulder Beach</b><br>Popular for cliff diving and beach activities.')
    .addTo(sportsLayer);

  // Add all layers to map initially (optional)
  hikingLayer.addTo(adventureMap);
  bikingLayer.addTo(adventureMap);
  sportsLayer.addTo(adventureMap);

  // Layer control to toggle hiking, biking, sports
  L.control.layers(null, {
    'Hiking Trails': hikingLayer,
    'Biking Routes': bikingLayer,
    'Sports Activities': sportsLayer
  }).addTo(adventureMap);
});



