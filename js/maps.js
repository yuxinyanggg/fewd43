function initMap() {
  var office = {lat: 1.285545, lng: 103.811644};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: office
  });
  var marker = new google.maps.Marker({
  position: office,
  map: map
  });
  }