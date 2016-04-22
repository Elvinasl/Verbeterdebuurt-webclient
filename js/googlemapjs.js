function getLocation(map) {
            
            // get the data from center of map
               google.maps.event.addListener(map, 'dragend', function (e) {
               geocoder = new google.maps.Geocoder();
               geocoder.geocode({'latLng': map.getCenter()} , function (result , status){
                if (status == google.maps.GeocoderStatus.OK){

                for (var i=0; i<result[0].address_components.length; i++) {
                for (var b=0;b<result[0].address_components[i].types.length;b++) {
                  //if you want the change the area ..
                if (result[0].address_components[i].types[b] == "administrative_area_level_2") {
                   // name of city
                    city= result[0].address_components[i];
                    break;
                        }
                    }
                }
                     // console.log("drag googlemap:"+city.long_name);
                    }
                

               });


            });
               google.maps.event.addListener(map, 'click', function (e) {
               geocoder = new google.maps.Geocoder();
               geocoder.geocode({'latLng':e.latLng} , function (result , status){
                if (status == google.maps.GeocoderStatus.OK){

                for (var i=0; i<result[0].address_components.length; i++) {
                for (var b=0;b<result[0].address_components[i].types.length;b++) {
                  //if you want the change the area ..
                if (result[0].address_components[i].types[b] == "administrative_area_level_2") {
                   // name of city
                    city= result[0].address_components[i];
                    // console.log(city);
                    //console.log(searchCity);
                    break;
                        }
                    }
                }
                     // console.log("click googlemap:"+city.long_name);
                    }
                

               });


            });

            
    
        }
function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('searchCity').value;
        if(cityName!=null){
          var address = cityName;
        }
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }