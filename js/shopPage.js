// var shopname = "Red Dot Bespoke";
function show_shopPage(shop_name){
    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    request.onreadystatechange = function() {
        
        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            alert("lalalla");
            // Convert responseText to JSON
            console.log(this.responseText);
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

            console.log(records)

            for(var record of records) {
                // counter ++; 
    
                shop_name = record.shop_name;
                shop_image = record.image_url;
                shop_description = record.shop_description;
    
                service_id = record.services.service_id;
                service_title = record.services.service_title;
                service_lead_time = record.services.service_lead_time;
                service_price = record.services.service_price;
                service_description = record.services.service_description;
    
                img_str = `
                <img src="${shop_image}" class="img-fluid" alt="Responsive image"
                style= "display: block;
                        margin-left: auto;
                        margin-right: auto;
                        " >
                `;
            }
            document.getElementById("shop_image").innerHTML = img_str;
        }
    

        
        }
        var url = "projectAPI/user/retrieveShopPage.php?shop_name=" + shop_name;
        
    
        request.open("GET", url, true);
    
        request.send();
}
