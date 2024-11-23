function initMap() {
    const stPete = { lat: 27.7701, lng: -82.6793 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: stPete,
    });

    const blueHavenLocation = { lat: 27.7730, lng: -82.6780 };

    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: blueHavenLocation,
        map: map,
        title: "BlueHaven High School Arena",
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>BlueHaven High School Arena</h3><p>456 Championship Drive<br>BlueHaven, BH 12345</p>",
    });

    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    });

    infoWindow.open(map, marker);
}
