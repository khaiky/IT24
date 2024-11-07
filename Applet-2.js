class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, message) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        marker.bindPopup(message);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);

myMap.addMarker(8.359735, 124.869206, 'CCS Faculty Office');
myMap.addMarker(8.359639,124.869179, 'CCS Laboratory 1');
myMap.addMarker(8.359554,124.869153, 'CCS Laboratory 2');
myMap.addMarker(8.307402,124.858806, 'Balay ni Sammy');
myMap.addMarker(8.310116,124.858972, 'balay nila alliah');
myMap.addMarker(8.313183, 124.862080, 'balay ni hiter');
myMap.addMarker(8.317840,124.860649, 'balay nila jibson');
myMap.addMarker(8.360219,124.867465, 'SC Building');
myMap.addMarker(8.360118,124.868904, 'Covered Court');
myMap.addMarker(8.360123,124.869306, 'AVR');
myMap.addMarker(8.359141,124.868581, 'BSBA Building');
myMap.addMarker( 8.359269,124.867835, 'Admin Building');


myMap.loadMarkersFromJson('Applet-2.json');