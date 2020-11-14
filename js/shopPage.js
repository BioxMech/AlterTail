// var shopname = "Red Dot Bespoke";

function show_shopPage(shop_name){
    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    request.onreadystatechange = function() {
        
        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            // alert("lalalla");
            // Convert responseText to JSON
            // console.log(this.responseText);
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

            // console.log(records)

            service_str = ``;

            for(var record of records) {
                // counter ++; 
    
                shop_name = record.shop_name;
                shop_image = record.image_url;
                shop_description = record.shop_description;
                street_address = record.street_address;
                unit = record.unit;
                postal_code = record.postal_code,
    
                service_id = record.services.service_id;
                service_title = record.services.service_title;
                service_lead_time = record.services.service_lead_time;
                service_price = record.services.service_price;
                service_description = record.services.service_description;
                service_image = record.services.service_image_url;
                
                shop_name_str = `
                <font size="12">
                    <b>${shop_name}</b>
                </font>
                `
                img_str = `
                <img src="${shop_image}" class="img-fluid" alt="Responsive image"
                style= "display: block;
                        margin-left: auto;
                        margin-right: auto;
                        " >
                `;

                shop_description_str = `
                <p>${shop_description}</p>
                `
                shop_address_str = `
                <p style = "margin: 20px"><strong>
                    Shop Address: ${street_address}, ${unit} ${postal_code}
                </strong></p>
                `


                service_str += `
                    <div class="card" style="width: 100%;">
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <img src="images/${service_image}" class="card-img" alt="...">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                <br>
                                <p class="card-text" style="text-align: center; font-weight:bold; color:rgb(109, 109, 109);">
                                    ${service_title}
                                </p>
                                <p style="text-align: center;">${service_description}<br><br>
                                <span style="font-weight:bold; color:rgb(95, 77, 77);">Price: from $${service_price}<br>
                                Lead Time: ${service_lead_time}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                // }
                
            }
            document.getElementsByClassName("shop_name")[0].innerHTML = shop_name_str;
            document.getElementsByClassName("shop_name")[1].innerHTML = shop_name_str;
            document.getElementById("shop_image").innerHTML = img_str;
            document.getElementById("shop_description").innerHTML = shop_description_str;
            document.getElementById("shop_services").innerHTML = service_str;
            document.getElementById("shop_address").innerHTML = shop_address_str;
        }
    
        }
        var url = "projectAPI/user/retrieveShopPage.php?shop_name=" + shop_name;
        
    
        request.open("GET", url, true);
    
        request.send();
}

// session email 
var email = sessionStorage.getItem("email")

function retrieveProfileDetails() {
    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    request.onreadystatechange = function() {
        
        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {

            // Convert responseText to JSON
            console.log(this.responseText);
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

            // console.log(records)

            for(var record of records) {
                // counter ++; 
                console.log(record);
                document.getElementById("bookName").setAttribute("value", record.fname);
                document.getElementById("bookEmail").setAttribute("value", record.email);
                document.getElementById("bookPhoneNumber").setAttribute("value", record.phone);
                var SuperSaaS_user_id = record.SuperSaaS_user_id;
                sessionStorage.setItem("SaaS_user_id", SuperSaaS_user_id);
                // console.log(SuperSaaS_user_id);
                // console.log(sessionStorage.getItem("SaaS_user_id"));
                // document.getElementById("bookStreetAddress").setAttribute("value", record.street_address);
                // document.getElementById("bookUnit").setAttribute("value", record.unit);
                // document.getElementById("bookPostal").setAttribute("value", record.postal_code);

            }
            document.getElementById("shop_image").innerHTML = img_str;
        }
    

        
        }
        var url = "projectAPI/user/retrieveProfile.php?email=" + email;
        
    
        request.open("GET", url, true);
    
        request.send();
}

function displaySlot() {
    var selectedSlot = document.getElementById("slotDropdownItem").value;
    console.log(selectedSlot);
    document.getElementById("dropdownMenuButton").innerText = selectedSlot;
}