// Code for the Add Location page.
var map
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: -34.397, lng: 150.644}
  });
 
}


function panIt(response,status){
    if (status === google.maps.GeocoderStatus.OK) {
			map.panTo(response[0].geometry.location)
            map.setCenter(response[0].geometry.location);
            map.setZoom(15)
           var marker = new google.maps.Marker({
               map: map,
               position: response[0].geometry.location
		     })
           }else{
               alert('Geocode was not successful for the following reason: ' + status)
           }
}
function findit(value){
				address=value
				geocoder=new google.maps.Geocoder();
				geocoder.geocode({"address":address},panIt);
			}
