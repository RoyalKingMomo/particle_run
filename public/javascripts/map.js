var zoom;
var map;
var locationOfEle;
var futurePathTaken = [{
        lat: 51.0801017121328,
        lng: -114.13265510137
    }, {
        lat: 51.0801017121328,
        lng: -114.13265510137
    }, {
        lat: 51.0800921494245,
        lng: -114.132484844743
    }, {
        lat: 51.0800921494245,
        lng: -114.132484844743
    }, {
        lat: 51.0800717646747,
        lng: -114.132252311539
    }, {
        lat: 51.0800717646747,
        lng: -114.132252311539
    }, {
        lat: 51.0800502777714,
        lng: -114.132051063982
    }, {
        lat: 51.0800502777714,
        lng: -114.132051063982
    }, {
        lat: 51.0800502777714,
        lng: -114.132051063982
    }, {
        lat: 51.0800502777714,
        lng: -114.132051063982
    }, {
        lat: 51.0800475351414,
        lng: -114.131823748174
    }, {
        lat: 51.0800475351414,
        lng: -114.131823748174
    }, {
        lat: 51.0800794046124,
        lng: -114.131649180385
    }, {
        lat: 51.0800869828416,
        lng: -114.131622824465
    }, {
        lat: 51.0800872448708,
        lng: -114.131633034204
    }, {
        lat: 51.0799234075516,
        lng: -114.131440506479
    }, {
        lat: 51.0798400508113,
        lng: -114.131610295582
    }, {
        lat: 51.0797056988427,
        lng: -114.131359020822
    }, {
        lat: 51.0796603380256,
        lng: -114.131250863517
    }, {
        lat: 51.0795935353862,
        lng: -114.131236784891
    }, {
        lat: 51.0795589231222,
        lng: -114.131295119315
    }, {
        lat: 51.0795484683609,
        lng: -114.131402918368
    }, {
        lat: 51.079522908093,
        lng: -114.131473782034
    }, {
        lat: 51.0794707591216,
        lng: -114.131555451399
    }, {
        lat: 51.0793815797047,
        lng: -114.131654299141
    }, {
        lat: 51.079314698233,
        lng: -114.131740509031
    }, {
        lat: 51.0792732132924,
        lng: -114.131772500787
    }, {
        lat: 51.0792302485699,
        lng: -114.13179594658
    }, {
        lat: 51.0791763658828,
        lng: -114.131804018906
    }, {
        lat: 51.0791224137742,
        lng: -114.131785670299
    }, {
        lat: 51.0790608443963,
        lng: -114.131752437216
    }, {
        lat: 51.079012176344,
        lng: -114.131719582565
    }, {
        lat: 51.0790042642756,
        lng: -114.131716654907
    }, {
        lat: 51.0789917417957,
        lng: -114.131689828332
    }, {
        lat: 51.0789758370016,
        lng: -114.131653772869
    }, {
        lat: 51.0789818845308,
        lng: -114.131665808946
    }, {
        lat: 51.0789743881618,
        lng: -114.131663375356
    }, {
        lat: 51.0789556375385,
        lng: -114.131654598569
    }, {
        lat: 51.0789341767554,
        lng: -114.131664446665
    }, {
        lat: 51.0788765750545,
        lng: -114.131707427238
    }, {
        lat: 51.0788550394005,
        lng: -114.131741785737
    }, {
        lat: 51.0787884163505,
        lng: -114.131861501341
    }, {
        lat: 51.078716579615,
        lng: -114.131982031732
    }, {
        lat: 51.0786691079656,
        lng: -114.132057767847
    }, {
        lat: 51.0786148398673,
        lng: -114.132093990809
    }, {
        lat: 51.0785673949273,
        lng: -114.132123989912
    }, {
        lat: 51.0784528652842,
        lng: -114.132103950647
    }, {
        lat: 51.0783988253942,
        lng: -114.132053731912
    }, {
        lat: 51.07837571875,
        lng: -114.132026816225
    }, {
        lat: 51.0783461885791,
        lng: -114.131987726168
    }, {
        lat: 51.0782292281916,
        lng: -114.131893698154
    }, {
        lat: 51.078189586568,
        lng: -114.131865397251
    }, {
        lat: 51.0780252511904,
        lng: -114.131884429674
    }, {
        lat: 51.0780223336287,
        lng: -114.131871019051
    }, {
        lat: 51.0780163431308,
        lng: -114.131858457084
    }, {
        lat: 51.0780257401778,
        lng: -114.131851738722
    }, {
        lat: 51.0780544744635,
        lng: -114.131839905541
    }, {
        lat: 51.0780824430742,
        lng: -114.131820927337
    }, {
        lat: 51.0780974372333,
        lng: -114.131808188602
    }, {
        lat: 51.0781184747082,
        lng: -114.131748009975
    }, {
        lat: 51.0781227208406,
        lng: -114.131718161326
    }, {
        lat: 51.0781463310358,
        lng: -114.131661457893
    }, {
        lat: 51.0781607620486,
        lng: -114.13162775475
    }, {
        lat: 51.0782201505472,
        lng: -114.13153779648
    }, {
        lat: 51.0782404709166,
        lng: -114.131567114949
    }, {
        lat: 51.0782411695596,
        lng: -114.131579899522
    }, {
        lat: 51.0784014986653,
        lng: -114.130670219285
    }, {
        lat: 51.0784326810544,
        lng: -114.130507038015
    }, {
        lat: 51.0784438796114,
        lng: -114.130528009082
    }, {
        lat: 51.0784247458784,
        lng: -114.130357175769
    }, {
        lat: 51.0784247458784,
        lng: -114.130357175769
    }, {
        lat: 51.0784784379117,
        lng: -114.130281672064
    }, {
        lat: 51.0784784379117,
        lng: -114.130281672064
    }, {
        lat: 51.078616736688,
        lng: -114.130200549157
    }, {
        lat: 51.078616736688,
        lng: -114.130200549157
    }, {
        lat: 51.0786462662806,
        lng: -114.130068343133
    }, {
        lat: 51.0786462662806,
        lng: -114.130068343133
    }, {
        lat: 51.0786462662806,
        lng: -114.130068343133
    }, {
        lat: 51.0787317836927,
        lng: -114.129937484092
    }, {
        lat: 51.0789587538726,
        lng: -114.129574061964
    }, {
        lat: 51.0789225570092,
        lng: -114.129521811247
    }, {
        lat: 51.0789210517501,
        lng: -114.129491126686
    }, {
        lat: 51.0788909232746,
        lng: -114.129394319652
    }, {
        lat: 51.0788292658811,
        lng: -114.130017696547
    }, {
        lat: 51.0787953127188,
        lng: -114.129891288439
    }, {
        lat: 51.0789246494206,
        lng: -114.12996504287
    }, {
        lat: 51.0789149322697,
        lng: -114.129951693259
    }, {
        lat: 51.0788920525559,
        lng: -114.129837417686
    }, {
        lat: 51.0788931140973,
        lng: -114.129820495273
    }, {
        lat: 51.0789048803097,
        lng: -114.129738924776
    }, {
        lat: 51.0789509971433,
        lng: -114.129775417644
    }, {
        lat: 51.0790103723786,
        lng: -114.129719944568
    }, {
        lat: 51.0791102158506,
        lng: -114.129751951806
    }, {
        lat: 51.0791379496814,
        lng: -114.129617730011
    }, {
        lat: 51.0791382152301,
        lng: -114.129618207582
    }, {
        lat: 51.07913821523,
        lng: -114.129618207582
    }, {
        lat: 51.07913821523,
        lng: -114.129618207582
    }, {
        lat: 51.0801259648362,
        lng: -114.12873391565
    }, {
        lat: 51.0801186131418,
        lng: -114.129092171348
    }, {
        lat: 51.0801186131418,
        lng: -114.129092171348
    }, {
        lat: 51.0796994440321,
        lng: -114.129470225849
    }, {
        lat: 51.0797799779987,
        lng: -114.129384515285
    }, {
        lat: 51.0798077361778,
        lng: -114.129344282633
    }, {
        lat: 51.0797369223107,
        lng: -114.129486924766
    }, {
        lat: 51.0797690087559,
        lng: -114.129466419322
    }, {
        lat: 51.0797797042377,
        lng: -114.129459584171
    }, {
        lat: 51.0797797042377,
        lng: -114.129459584171
    }, {
        lat: 51.0802073509677,
        lng: -114.13007893905
    }, {
        lat: 51.0802385784832,
        lng: -114.130188769722
    }, {
        lat: 51.0802385784832,
        lng: -114.130188769722
    }, {
        lat: 51.0802330676058,
        lng: -114.130192249384
    }, {
        lat: 51.080268411199,
        lng: -114.130385459071
    }, {
        lat: 51.0802599103062,
        lng: -114.130378360624
    }, {
        lat: 51.0802599103062,
        lng: -114.130378360624
    }, {
        lat: 51.0803138829593,
        lng: -114.130594398564
    }, {
        lat: 51.0803168514465,
        lng: -114.13060627506
    }, {
        lat: 51.0806079335686,
        lng: -114.131308126357
    }, {
        lat: 51.0806121542293,
        lng: -114.131304267481
    }, {
        lat: 51.0806192509133,
        lng: -114.131290666098
    }, {
        lat: 51.0805678139241,
        lng: -114.13132220059
    }, {
        lat: 51.0805824780924,
        lng: -114.13133833139
    }, {
        lat: 51.0805824780924,
        lng: -114.13133833139
    }, {
        lat: 51.0805824780924,
        lng: -114.13133833139
    }, {
        lat: 51.0805824780924,
        lng: -114.13133833139
    }, {
        lat: 51.0805824780924,
        lng: -114.13133833139
    }, {
        lat: 51.0801443511138,
        lng: -114.131560629893
    }, {
        lat: 51.0801437854886,
        lng: -114.131561866331
    }, {
        lat: 51.0801142554761,
        lng: -114.131609667767
    }, {
        lat: 51.0801079559962,
        lng: -114.131620298591
    }, {
        lat: 51.0801089149676,
        lng: -114.131618947688
    }, {
        lat: 51.0800541808475,
        lng: -114.131844902025
    }, {
        lat: 51.0800541808475,
        lng: -114.131844902025
    }, {
        lat: 51.0800589330511,
        lng: -114.132162802878
    }, {
        lat: 51.0800826679558,
        lng: -114.132393058973
    }, {
        lat: 51.0800826679558,
        lng: -114.132393058973
    }, {
        lat: 51.0800905719758,
        lng: -114.132503110895
    }, {
        lat: 51.0800905719758,
        lng: -114.132503110895
    }
];
var currentPathTaken = [{
    lat: 51.0801017121328,
    lng: -114.13265510137
    }];
var currentPathTakenPlot;
var updateMan;
var i = 1;

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

function getCenter() {
    for (i = 0; i < currentPathTaken.length; i++) {
        alert(1);
    }
}

function getZoom() {

}

function liveDemo() {
    while (i < futurePathTaken.length) {
        doSomething(); //setTimeout(doSomething, 300);
    }
}

function doSomething() {
    //alert("shit");
    if (i < futurePathTaken.length) {
        currentPathTaken.push(new google.maps.LatLng(futurePathTaken[i]['lat'], futurePathTaken[i]['lng']));
        currentPathTakenPlot.setPath(currentPathTaken);
        i++;
    }
}
