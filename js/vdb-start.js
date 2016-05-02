
// The latitude and longitude of your business / place

function start(){
      var mainLat = 52.158367;
      var mainLng = 4.492999;
      this._map_center = {lat: mainLat , lng: mainLng};
      this._marker_positions = [{lat: 27.1959742, lng: 78.02423269999100}, {lat: 27.1959733, lng: 78.02423269999992}] ;
      var mapOptions = {
        zoom: 15, // initialize zoom level - the max value is 21
        disableDefaultUI: true,
        streetViewControl: false, // hide the yellow Street View pegman
        /*scaleControl: false, // allow users to zoom the Google Map*/
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center:  this._map_center,
        zoomControlOptions : { 
          position :google.maps.ControlPosition.RIGHT_CENTER }
      };
     map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);
     getLocation(map);
     var geocoder = new google.maps.Geocoder();
     
     if(cityName!=null){
        geocodeAddress(geocoder, map);
        cityName=null;
     }
     
      //start location picker
     map.setOptions({draggable: true, zoomControl: true, scrollwheel: true, disableDoubleClickZoom: true});
    
} /*
class Map {
    /**
     * Constructor function
     * @param {Object} config Object literal with parameters for the map
     * @param {Object} application The application that handles user interaction 
     *
    constructor(config, application) {
      this._map_center = {lat: 52.158367, lng: 4.492999};
      this._marker_positions = [{lat: 27.1959742, lng: 78.02423269999100}, {lat: 27.1959733, lng: 78.02423269999992}] ;
      this.showGoogleMaps(this._map_center);
    }

    loadMarkers(marker_array){
      for(marker in marker_array){
        var temp_marker = new google.maps.Marker({
          position: marker,
          map: this._map,
          title: 'Hello World!'
        });
      }
    }
    showGoogleMaps(center, type){
      var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        disableDefaultUI: true,
        streetViewControl: false, // hide the yellow Street View pegman
        /*scaleControl: false, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
      };
    
      map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);
      //start location picker
      map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true}); 
   }
};*/


google.maps.event.addDomListener(window, 'load', start);