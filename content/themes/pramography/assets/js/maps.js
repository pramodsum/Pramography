var locations = [
  ['Bengaluru', "", 12.9667, 77.5667],
  ['Hampi', "http://sumninjacode.io/hampi-express", 15.3350, 76.4620],
  ['Pondicherry', "http://pramography.herokuapp.com/pondicherry/", 11.9310, 79.7852],
  ['Golden Temple, Sripuram', "", 12.8733, 79.0884],
  ['Goa', "", 15.4989, 73.8278],
  ['SVYASA Prashanti Kutiram', "", 12.4600, 77.3800],
  ['Puerto Rico', "http://pramography.herokuapp.com/puerto-rico/", 18.4500, -66.1000],
  ['Miami, FL', "http://pramography.herokuapp.com/miami/", 25.7753, -80.2089],
  ['Seattle, WA', "http://pramography.herokuapp.com/seattle-wa/", 47.6097, -122.3331],
  ['San Francisco, CA', "", 37.7833, -122.4167],
  ['Ann Arbor, MI', "http://pramography.herokuapp.com/ann-arbor/", 42.2814, -83.7483],
  ['Davis, CA', "http://pramography.herokuapp.com/davis-ca/", 38.5539, -121.7381],
  ['Cancun, Mexico', "", 21.1606, -86.8475]
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: new google.maps.LatLng(42.2814, -83.7483),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;
var geocoder = geocoder = new google.maps.Geocoder();;
var bounds = new google.maps.LatLngBounds();

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][2], locations[i][3]),
    map: map,
    title: locations[i][0]
  });

  //add marker to bounds
  bounds.extend(marker.getPosition());

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      var content = "<a href=\"" + locations[i][1] + "\">" + locations[i][0] + "</a>"
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

// recenter map to fit all markers
map.fitBounds(bounds);
