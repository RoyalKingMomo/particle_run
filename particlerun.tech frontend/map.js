function initMap() {
    var locationOfEle = {
        lat: -25.363,
        lng: 131.044
    };
    var zoom = 4;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: locationOfEle,
        mapTypeId: 'roadmap'
    });
}
