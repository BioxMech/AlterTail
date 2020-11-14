var map = null;
var radius_circle;
var markers_on_map = [];
var geocoder = new google.maps.Geocoder();
var infowindow;
var shop_array = [];

//all_locations is just a sample, you will probably load those from database
var all_locations1 = [{
  type: "Shop",
  name: "Q MENSWEAR",
  img:"images/alteration_shop1 .jpg", 
  star:"images/star.png",
  rating:"4.4",
  description:"Every house has their own signature cut, technical expertise or style which sets it apart from other houses or menswear brand. At Q MENSWEAR, we also have our own set of standards when it comes to our garments.",
  rating_num:"17",
  lat: 1.2750,
  lng: 103.8502
}, {
  type: "Shop",
  name: "SuitYoursef",
  img:"images/alteration_shop2.jpg",
  star:"images/star.png",
  rating:"4.6",
  description:"We specialise in creating high quality suits and shirts for your everyday and once-in-a-lifetime moments at affordable prices.",
  rating_num:"255",
  lat: 1.3071,
  lng:103.8333
}, {
  type: "Shop",
  name: "May Tailor & Laundry",
  img:"images/alteration_shop3.jpg",
  star:"images/star.png",
  rating:"3.7",
  description:"Our mission is to provide excellent laundry & tailoring service, coupled with our competitive prices, to deliver the clothes that suits you as well as to put a smile on your face. Your satisfaction is our responsibility!",
  rating_num:"16",
  lat: 1.3045,
  lng: 103.8339
}, {
  type: "Shop",
  name: "Mohan's Custom Tailors",
  img:"images/alteration_shop4.jpeg",
  star:"images/star.png",
  rating:"4.7",
  description:"At Mohan's Custom Tailors we know the importance of a perfect fit, which is why all our garments are hand-made under strict quality control. ",
  rating_num:"145",
  lat: 1.3071,
  lng: 103.8333
}, {
  type: "Shop",
  name: "Meng Yee Alteration",
  img:"images/alteration_shop5.jpg",
  star:"images/star.png",
  rating:"2.9",
  description:"Garment alteration, make to measure suits, copying of runway styles and bespoke creations.",
  rating_num:"16",
  lat: 1.3071,
  lng: 103.8339
}, {
  type: "Shop",
  name: "Ehkay Corner Tailors",
  img:"images/alteration_shop6.jpg",
  star:"images/star.png",
  rating:"4.9",
  description:"Now through ehkaycornertailor.com, the Singapore tailor tradition of craftsmanship and personalized service is available with online convenience.",
  rating_num:"235",
  lat: 1.3010,
  lng: 103.8411
}];

// function getLatLng(address, callback)
// {
//   var latitude, longitude;
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       latitude = results[0].geometry.location.lat();
//       longitude = results[0].geometry.location.lng();
//       callback(latitude, longitude);
//     } 
//   }); 
// }


function getAllShops()
{
  var request = new XMLHttpRequest(); // Prep to make an HTTP request\\\

  request.onreadystatechange = function() {

      // Check if response is ready!
      if( this.readyState == 4 && this.status == 200 ) {

         // Convert responseText to JSON
         var response_json = JSON.parse(this.responseText);
         var records = response_json.records;

         //console.log(records);



         for (shop of records) 
         {
              var email = shop.email;
              var shop_name = shop.shop_name;
              var street_address = shop.street_address;
              var shop_summary = shop.shop_summary;
              var shop_description = shop.shop_description;
              var unit = shop.unit;
              var postal_code = shop.postal_code;
              var shop_category = shop.shop_category;
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


            shop_details = {name, img, star, rating, shop_summary, rating_num, lat, lng };
            //shop_details = shop;
            shop_array.push(shop_details);
            //console.log(shop_details);
          // count = 1
          //   getLatLng(street_address, 
          //   function(latitude, longitude) 
          //   {
          //     var lat;
          //     var lng;
          //     lat = latitude;
          //     lng = longitude;
          //     shop_details = Object.assign({}, shop,{lat, lng});
          //     // console.log(shop_details)
          //     shop_array.push(shop_details);
          //    count +=1;
          //    console.log(count)
          //     //console.log(shop_array);
          //   }
          //   );
            

        }
          
      }
  }


  // Using the api to retrieve the user's shop details
  var url = "projectAPI/user/retrieveAllShop.php";

  request.open("GET", url);

  request.send();

  return (shop_array);
}

function getShops()
{
  var request = new XMLHttpRequest(); // Prep to make an HTTP request\\\

  request.onreadystatechange = function() {

      // Check if response is ready!
      if( this.readyState == 4 && this.status == 200 ) {

        //console.log(this.responseText);

         // Convert responseText to JSON
         var response_json = JSON.parse(this.responseText);
         var records = response_json.records;

         //console.log(records);

         for (shop of records) {
            var email = shop.email;
            var shop_name = shop.shop_name;
            var street_address = shop.street_address;
            var shop_summary = shop.shop_summary;
            var shop_description = shop.shop_description;
            var unit = shop.unit;
            var postal_code = shop.postal_code;
            var shop_category = shop.shop_category;
            var rating = shop.rating;
            var rating_num = shop.rating_num;
            var image_url = shop.image_url;

            var shop_details = {};
            var name = shop_name;
            var img = image_url;
            var star = "images/star.png";
            var rating = rating;
            var description = shop_description;
            var summary = shop_summary;
            var rating_num = rating_num;
            var postal_code = postal_code;
            shop_details = {name, img, star, rating, summary, rating_num};
            //console.log(shop_details);
            shop_array.push(shop_details);
        }
        //console.log(shop_array);
        
      }
  }


  // Using the api to retrieve the user's shop details
  var url = "projectAPI/user/retrieveAllShop.php";

  request.open("GET", url);

  request.send();

  return (shop_array);
}

var all_locations = getAllShops();
console.log(all_locations);

//var shop_info = getShops();

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

function showCloseLocations() {
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

                shop_array.push(location.name);
                console.log(location);
               

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
        } else {
          alert("No results found while geocoding!");
        }
      } else {
        alert("Geocode was not successful: " + status);
      }
    });
  }
}

//console.log(all_locations);
//console.log(shop_array);



function displaycard(){
  var str = "";
  for(i = 0; i < all_locations.length; i++) {
    var shop = all_locations[i];
    // console.log(shop_array);
    // console.log(shop);  
    // console.log(shop_array.indexOf(shop.name));
    if(shop_array.indexOf(shop.name) > -1) {
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
              <button type="button" class="btn btn-link" style = "padding-left: 0px; padding-top: 0px; color:darkslategrey;">Read More</button>
            </div>
          </div>
        </div>
        </div>
      `;
    }
    else{
      str+= `
          

      `;


    }
  }
  document.getElementById("shop_cards").innerHTML = str;
}


function displayfilteredcard(){
  console.log(shop_info);
  var str = "";
  for(i = 0; i < shop_info.length; i++) {
    // console.log(shop_array);
    // console.log(shop);  
    //console.log(shop_array.indexOf(shop.name));
    var sorted_array = sortarray(shop_info);
    console.log(sorted_array);
    
    if(sorted_array.length > -1) {
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
              <p class="card-text">${shop.description}</p>
              <button type="button" class="btn btn-link" style = "padding-left: 0px; padding-top: 0px; color:darkslategrey;">Read More</button>
            </div>
          </div>
        </div>
        </div>
      `;
    }
    else{
      str+= `


      `;


    }
  }
  document.getElementById("shop_cards").innerHTML = str;

}

function sortarray(shop_info){
  var shop_array = [];
  for(i = 0; i < shop_info.length; i++) {
    var shop = all_locations[i];
    // console.log(shop_array);
    console.log(shop);  
    //console.log(shop_array.indexOf(shop.name));
    if(shop_array.indexOf(shop.name) > -1) {
     var rating = shop.rating;
     var shop_img = shop.img;
     var shop_name = shop.name;
     var rating_num = shop.rating_num;
    var shop_description = shop.description;
     console.log(rating);
    shop_array.push([rating,shop_img,shop_name,rating_num,shop_description]);
   }
    //console.log(shop_array);
  shop_array.sort(function (x, y) {
      return x.rating - y.rating;
   });
   }
   return shop_array;
}