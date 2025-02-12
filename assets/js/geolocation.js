const geo_bar = document.getElementById('geolocation_bar');
const lat = document.getElementById('latitude');
const long = document.getElementById('longitude');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(show_pos);
} else {
    geo_bar.innerHTML = "Geolocation is not supported."
}

function show_pos (position) {
    lat.innerText = position.coords.latitude;
    long.innerText = position.coords.longitude;
}