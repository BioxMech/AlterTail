function displayHome() {

    var request = new XMLHttpRequest(); // Prep to make an HTTP request
    request.onreadystatechange = function() {
        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            // Convert responseText to JSON
            // console.log(this.responseText);
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

            // console.log(records)

            var str = ``;
            let counter = 0;
            var car = '';
            let isActive = false;
            let carCounter = 0;
            // random 0 to 10
            var randomizer = Math.floor(Math.random() * 11) / 2

            for(var record of records) {
                if (counter < 9) {
                    str += `
                    <div class="col mb-4">
                        <div class="card h-100">
                            <a class="shop_url" href="shopPage.html?shop_name=${record.shop_name}&schedule_id=${record.schedule_id}">
                                <img src="${record.image_url}" class="card-img-top">
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">${record.shop_name}</h4>
                                <h5>${record.rating} / 5.0 <img class="mb-1" src="images/star.png" style="max-width: 6%; height:auto;"> (${record.rating_num})</h5>
                                <p class="card-text">${record.shop_summary}</p>
                            </div>
                        </div>
                    </div>
                    `;
                }

                let condition = counter % randomizer;
                

                if ((counter == randomizer || counter != 0) && condition == 0 && carCounter < 4) {
                    if (isActive) {
                        car += `        
                        <div class="carousel-item">
                            <img src="${record.image_url}" class="d-block w-100">
                            <div class="carousel-caption d-none d-md-block carouselDescription" >
                                <h2 class="star_h2" id="slide_heading1"><b>${record.shop_name}</b></h2>
                                <p>${record.shop_summary}</p>
                            </div>
                        </div>
                        `;
                    }
                    else {
                        car += `        
                        <div class="carousel-item active">
                            <img src="${record.image_url}" class="d-block w-100">
                            <div class="carousel-caption d-none d-md-block carouselDescription">
                                <h2 class="star_h2" id="slide_heading1" ><b>${record.shop_name}</b></h2>
                                <p>${record.shop_summary}</p>
                            </div>
                        </div>
                        `;
                        isActive = true;
                    }
                    carCounter += 1;
                }

                counter += 1;
                if (counter >= 9 && carCounter >= 4) {
                    break;
                }
                
            }

            document.getElementById("carouselItems").innerHTML = car;
            document.getElementById("shopCards").innerHTML = str;
        }
    
    }
        var url = "projectAPI/user/retrieveAllShopByRating.php";
        
    
        request.open("GET", url, true);
    
        request.send();
    
}