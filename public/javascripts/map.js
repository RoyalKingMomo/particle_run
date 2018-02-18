var zoom;
var map;
var locationOfEle;
var currentPathTaken;
var currentPathTakenPlot;
var updateMan;

function initMap() {
    //mapping and position
    locationOfEle = {
        lat: 51.0779917,
        lng: -114.1355364
    };
    zoom = 15.66;

    //map and styling
    makeMap();

    //data for path taken
    currentPathTaken = [
        {
            lat: 53.444601,
            lng: -113.613527
        },
        {
            lat: 53.444378,
            lng: -113.613284
        },
        {
            lat: 53.443826,
            lng: -113.613304
        },
        {
            lat: 53.442915,
            lng: -113.613723
        },
        {
            lat: 53.441770,
            lng: -113.616024
        },
        {
            lat: 53.416386,
            lng: -113.493354
        },
        {
            lat: 51.082547,
            lng: -114.125788
        },
        {
            lat: 51.080057,
            lng: -114.130356
        }
        ];

    //plotting for path taken
    currentPathTakenPlot = new google.maps.Polyline({
        path: currentPathTaken,
        geodesic: true,
        strokeColor: '#3399CC',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        map: map
    });

    google.maps.event.addListener(currentPathTakenPlot, 'click', function (h) {
        updatePath();
    });
}

function updatePath() {
    currentPathTaken = [
        {
            lat: 53.444601,
            lng: -113.613527
        },
        {
            lat: 53.444378,
            lng: -113.613284
        },
        {
            lat: 53.443826,
            lng: -113.613304
        },
        {
            lat: 53.442915,
            lng: -113.613723
        }
    ];
    // add new point (use the position from the click event)
    // update the polyline with the updated path
    currentPathTakenPlot.setPath(currentPathTaken);
}

function makeMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: locationOfEle,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
      }
    ]
  },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
      }
    ]
  },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
      }
    ]
  },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
      }
    ]
  },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
      }
    ]
  },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
      }
    ]
  },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
      }
    ]
  },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
      }
    ]
  },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
      }
    ]
  },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
      }
    ]
  },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
      }
    ]
  },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
      }
    ]
  },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
      }
    ]
  },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
      }
    ]
  },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
      }
    ]
  },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
      }
    ]
  },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
      }
    ]
  },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
      }
    ]
  },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
      }
    ]
  }
],
        minZoom: 3
    });

}

function shitTheBed() {
    alert("I shat the bed");
}
