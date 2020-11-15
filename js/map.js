var map = null;
var radius_circle;
var markers_on_map = [];
var geocoder = new google.maps.Geocoder();
var infowindow;
var shop_array = [];
var shop_name_array = [];
var all_locations = [];

document.getElementById("address").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    showCloseLocations();
  }
});


function getAllShops()
{
  var request = new XMLHttpRequest(); // Prep to make an HTTP request\\\

  request.onreadystatechange = function() {

      // Check if response is ready!
      if( this.readyState == 4 && this.status == 200 ) {

         // Convert responseText to JSON
         var response_json = JSON.parse(this.responseText);
         var records = response_json.records;

 
         for (shop of records) 
         {
              var shop_name = shop.shop_name;
              var street_address = shop.street_address;
              var shop_summary = shop.shop_summary;
              var shop_description = shop.shop_description;
              var schedule_id = shop.schedule_id;
              var postal_code = shop.postal_code;
              var rating = shop.rating;
              var rating_num = shop.rating_num;
              var image_url = shop.image_url;
              var lat = shop.lat;
              var lng = shop.lng;

              var shop_details = {};
              var name = shop_name;
              var img = image_url;
              var star = "images/star.png";
              var rating = rating;
              var shop_description = shop_description;
              var shop_summary = shop_summary;
              var rating_num = rating_num;
              var postal_code = postal_code;
              var street_address = street_address;


            shop_details = {name, img, star, rating, shop_summary, rating_num, lat, lng , schedule_id};
            if (shop_name_array.length != 6) {
              shop_name_array.push(name);
            }
            shop_array.push(shop_details);
            displaycard(); 
        }
      }
  }

  // Using the api to retrieve the user's shop details
  var url = "projectAPI/user/retrieveAllShop.php";

  request.open("GET", url);

  request.send();

  if  (all_locations === []) {
    all_locations = shop_array;
  }

  return (shop_array);
}

function initializeShopDisplay() {
  all_locations = getAllShops(); 
}

//initialize map on document ready
document.addEventListener("DOMContentLoaded", function() {
  var latlng = new google.maps.LatLng(1.3521, 103.8198); //you can use any location as center on map startup
  var myOptions = {
    zoom: 11,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  geocoder = new google.maps.Geocoder();
  google.maps.event.addListener(map, 'click', function() {
    if (infowindow) {
      infowindow.setMap(null);
      infowindow = null;
    }
  });
});

var selected_array = [];

function showCloseLocations(filtered) { 
  if (document.getElementById("address").value == "") {
    return;
  }

  document.getElementById("shop_cards").innerHTML = "";
  shop_array = [], shop_name_array = [];
  var i;
  var radius_km = $('#radius_km').val();
  var address = $('#address').val() + "Singapore";

  //remove all radii and markers from map before displaying new ones
  if (radius_circle) {
    radius_circle.setMap(null);
    radius_circle = null;
  }
  for (i = 0; i < markers_on_map.length; i++) {
    if (markers_on_map[i]) {
      markers_on_map[i].setMap(null);
      markers_on_map[i] = null;
    }
  }

  
  if (geocoder) {
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          var address_lat_lng = results[0].geometry.location;
          radius_circle = new 
          google.maps.Circle({
            center: address_lat_lng,
            radius: radius_km * 1000,
            clickable: false,
            map: map
          });
          
          //console.log(all_locations);
          if (radius_circle) map.fitBounds(radius_circle.getBounds());
          for (var j = 0; j < all_locations.length; j++) {
            (function(location) {
              var marker_lat_lng = new 
              google.maps.LatLng(location.lat, location.lng);
              var distance_from_location = google.maps.geometry.spherical.computeDistanceBetween(address_lat_lng, marker_lat_lng); //distance in meters between your location and the marker
              var n = distance_from_location.toFixed(2)
              if (distance_from_location <= radius_km * 1000) {
                  var new_marker = new 
                  google.maps.Marker({
                  position: marker_lat_lng,
                  map: map,
                  icon:'images/shop.png',
                  title: location.name
                })
                ;
                var name = location.name;
                var img = location.img;
                var rating = location.rating;
                var rating_num = location.rating_num;
                var shop_summary = location.shop_summary;
                
                shop_array.push({name, img, rating, rating_num, shop_summary});
                shop_name_array.push(name);

  
                google.maps.event.addListener(new_marker, 'click', function() {
                  if (infowindow) {
                    infowindow.setMap(null);
                    infowindow = null;
                  }
                  infowindow = new 
                  google.maps.InfoWindow({
                    content:
                    '<div class="card" style="width: 18rem;">'+
                    '<img class="card-img-top" src="' + location.img + '" alt="Card image cap">'+
                    '<div class="card-body">' +
                      '<div class = "row" style = "margin-bottom: 5px">'+ '<div class = "col-xs-6" style = "margin-left:15px;"><img class="card-img-top" src="' + location.star + '" alt="Card image cap" style="width: 15px; height: 15px;"></div>'+'<div class = "col-xs-6"><p class = "font-weight-bold" style="margin: 0px; padding-top: 2px; padding-left:5px;">'+ location.rating +' ('  + location.rating_num + ')' + '</p></div>'+ '</div>' +
                      '<h6 class="card-title" style = "margin: 0px">'+ location.name + '</h6>'+
                      '<div style = "margin-top: 5px">' + location.shop_summary +' </div>'+
                      '<p class="card-text" style = "margin-top: 5px" >' + n + ' meters from my location'+ '</p>'+
                    '</div>'+
                     '</div>',

                    //content: '<div style="color:red">' + location.name + '</div>' + " is " + distance_from_location + " meters from my location",
                    size: new 
                    google.maps.Size(150, 50),
                    pixelOffset: new 
                    google.maps.Size(0, -30),
                    position: marker_lat_lng,
                    map: map
                  });
                  
   
                });
                markers_on_map.push(new_marker);
              }
            })(all_locations[j]);
            
          }
          displaycard();
          if (filtered === 1) {
            filteredcard();
          }
        } else {
          alert("No results found while geocoding!");
        }
      } else {
        alert("Geocode was not successful: " + status);
      }
    });
  }
}


function displaycard(){
  var str = "";
  for(i = 0; i < all_locations.length; i++) {
    var shop = all_locations[i];
    
    if(shop_name_array.indexOf(shop.name) > -1) {
    
      str += `
        <div class="card mb-3" style="max-width: 1000px;">
        <div class="row no-gutters">
          <div class="col-md-4" style = "margin-top: auto; margin-bottom: auto;">
            <img src="${shop.img}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <div class = "row">
                   <h5 class="card-title col-xs-5" style = "margin-left: 15px; margin-top: 1px;">${shop.name}</h5>
                    <div class = "col-xs-3" style = "margin-left:15px;">
                        <img class="card-img-top" src="images/star.png" alt="Card image cap" style="width: 15px; height: 15px;">
                    </div>
                    <div class = "col-xs-4">
                        <p class = "font-weight-bold" style="margin: 0px; padding-top: 2px; padding-left:5px;">
                            ${shop.rating} (${shop.rating_num})
                        </p>
                    </div>
                </div>
              <p class="card-text">${shop.shop_summary}</p>
              <button type="button" class="btn btn-link" style = "padding-left: 0px; padding-top: 0px; color:darkslategrey;" onclick="window.location='shopPage.html?shop_name=${shop.name}&schedule_id=${shop.schedule_id}';">Read More</button>
            </div>
          </div>
        </div>
        </div> 
      `;
    }
    
  }
  if (str.length == 0) {
    str = `
    <div class="alert alert-danger" role="alert" style = "height: 150px; margin-top: 8  0px; margin-bottom: 150px; padding-top: 40px;">
        <h3 class="text-center font-weight-bold">Sorry, No Shop Near Your Specified Location!</h3>
        <h4 class="text-center font-weight-bold">Please Try Again!!!</h4>
      </div>  
    `;
  }
  
  console.log(str);
  document.getElementById("shop_cards").innerHTML = str;
}

function applyfilter() {
  showCloseLocations(1)
}

function comparerating(a ,b) {
  if (a[3] < b[3]) {
    return -1;
  }
  else if (a[3] > b[3]) {
    return 1;
  }
  return 0;
}

function filteredcard(){
  var str = "";
  var result_array =[];
  var index_array = [];
  for(i = 0; i < all_locations.length; i++) {
    var shop = all_locations[i];

    if(shop_name_array.indexOf(shop.name) != -1) {
      index_array.push((shop_name_array.indexOf(shop.name)));
      result_array.push([shop.img,shop.name,shop.rating_num,shop.rating,shop.shop_summary, shop.schedule_id]);
      
    }
    
  }
  sorted_array = result_array.sort(comparerating).reverse();

  for(z=0; z<sorted_array.length;z++) {
    
    str += `
      <div class="card mb-3" style="max-width: 1000px;">
      <div class="row no-gusorted_arrayers">
        <div class="col-md-4" style = "margin-top: auto; margin-bottom: auto;">
          <img src="${sorted_array[z][0]}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
              <div class = "row">
                <h5 class="card-title col-xs-5" style = "margin-left: 15px; margin-top: 1px;">${sorted_array[z][1]}</h5>
                  <div class = "col-xs-3" style = "margin-left:15px;">
                      <img class="card-img-top" src="images/star.png" alt="Card image cap" style="width: 15px; height: 15px;">
                  </div>
                  <div class = "col-xs-4">
                      <p class = "font-weight-bold" style="margin: 0px; padding-top: 2px; padding-left:5px;">
                      ${sorted_array[z][3]} (${sorted_array[z][2]})
                      </p>
                  </div>
              </div>
            <p class="card-text">${sorted_array[z][4]}</p>
            <button type="button" class="btn btn-link" style = "padding-left: 0px; padding-top: 0px; color:darkslategrey;" onclick="window.location='shopPage.html?shop_name=${sorted_array[z][1]}&schedule_id=${sorted_array[z][5]}';">Read More</button>
          </div>
        </div>
      </div>
      </div>
    `;
  }
  if (str.length == 0) {
    str = `
      <div class="alert alert-danger" role="alert" style = "height: 150px; margin-top: 8  0px; margin-bottom: 150px; padding-top: 40px;">
        <h3 class="text-center font-weight-bold">Sorry, No Shop Near Your Specified Location!</h3>
        <h4 class="text-center font-weight-bold">Please Try Again!!!</h4>
      </div>  
    `;
  }

  document.getElementById("shop_cards").innerHTML = str;
}





