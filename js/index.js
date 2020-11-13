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

            str = ``;

            for(var record of records) {
                str += `
                <div class="card h-100">
                    <a class="shop_url" href="shopPage.html?shop_name=${record.shop_name}">
                        <img src="${record.image_url}"  class="card-img-top">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${record.shop_name}</h5>
                        <p class="card-text">${record.shop_summary}</p>
                    </div>
                </div>
                `;
                
            }
            document.getElementById("shopCards").innerHTML = str;
        }
    
    }
        var url = "projectAPI/user/retrieveAllShop.php";
        
    
        request.open("GET", url, true);
    
        request.send();
    
}