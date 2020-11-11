function getProfileDetails(email, isProfilePage) {

    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    request.onreadystatechange = function() {

        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            
            // Convert responseText to JSON
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

           for (profile of records) {
            var email = profile.email;
            var name = profile.fname;
            var gender = profile.gender;
            var username = profile.username;
            var password = profile.pw;
            var phone = profile.phone;
            var address = profile.street_address;
            var unit = profile.unit;
            var postalCode = profile.postalCode;
            var image_url = profile.image_url;
           }

            if (isProfilePage) {

            }
            else {
                var registerProfile = document.getElementById("registerProfile");
        
                registerProfile.innerHTML = `
                <a href="" class="nav-link"> ${username} <img id="profileImage" src="images/profile_image.jpg" /></a>
                `;
            }

        }

    }

    // Using the api to retrieve the user's profile details
    var url = "../projectAPI/user/retrieveProfile.php?email=" + email;

    request.open("GET", url, true);

    request.send();

}