function init() {
  var mapCentre = new google.maps.LatLng(51.508742,-0.120850);

  var mapProp = {
    center:mapCentre,
    zoom:9,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
  	position:mapCentre,
  	animation:google.maps.Animation.BOUNCE
  	});

  marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', init);