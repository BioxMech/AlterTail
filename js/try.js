function displayfilteredcard(){
    var str = "";
    for(i = 0; i < all_locations.length; i++) {
      var shop = all_locations[i];
      // console.log(shop_array);
      // console.log(shop);  
      //console.log(shop_array.indexOf(shop.name));
      var final_array = sortarray();
      console.log(final_array);
      
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
  
  function sortarray(){
    var shop_array = [];
    for(i = 0; i < all_locations.length; i++) {
      var shop = all_locations[i];
      // console.log(shop_array);
      // console.log(shop);  
      //console.log(shop_array.indexOf(shop.name));
      if(shop_array.indexOf(shop.name) > -1) {
        var rating = shop.rating;
        var shop_img = shop.img;
        var shop_name = shop.name;
        var rating_num = shop.rating_num;
        var shop_description = shop.description;
        console.log(rating);
        shop_array.append([rating,shop_img,shop_name,rating_num,shop_description]);
      }
      //console.log(shop_array);
      shop_array.sort(function (x, y) {
        return x.rating - y.rating;
    });
    }
    return shop_array;
  }