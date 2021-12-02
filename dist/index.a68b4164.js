// Initialize and add the map
function initMap() {
    // The location of Marrakesh
    const marrakesh = {
        lat: 31.628674,
        lng: -7.992047
    };
    // The map, centered at Marrakesh
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: marrakesh
    });
    // The marker, positioned at Marrakesh
    const marker = new google.maps.Marker({
        position: marrakesh,
        map: map
    });
}

//# sourceMappingURL=index.a68b4164.js.map
