const socket = io();
console.log("hello world");

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => { // Correctly use 'position' here
      const { latitude, longitude } = position.coords; // Extract coordinates correctly
      socket.emit("send-location", { latitude, longitude }); // Correct method name
    },
    (error) => {
      console.error(error); // Handle geolocation errors
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}

// Initialize the Leaflet map
const map = L.map('map').setView([0, 0], 10); // Set default view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
