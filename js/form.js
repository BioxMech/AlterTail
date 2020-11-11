function clearAllSignin() {
    document.getElementById("signinEmail").value = '';
    document.getElementById("psw").value = '';
}

function clearAllRegister() {
    document.getElementById("registerEmail").value = '';
    document.getElementById("registerUserName").value = '';
    document.getElementById("registerName").value = '';
    document.getElementById("registerPhoneNumber").value = '';
    document.getElementById("registerPassword").value = '';
    document.getElementById("registerStreetAddress").value = '';
    document.getElementById("registerUnit").value = '';
    document.getElementById("registerPostal").value = '';
    document.getElementById("registerPassword").value = '';
    document.getElementById("cregisterPassword").value = '';
}

// Sign in modal
function signInVerification() {
  var emailOutput = document.getElementById("emailOutput");
  var passwordOutput = document.getElementById("passwordOutput");
  var email = document.getElementById("signinEmail");
  var password = document.getElementById("psw");

  var request = new XMLHttpRequest(); // Prep to make an HTTP request
    request.onreadystatechange = function() {

        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            
            // Convert responseText to JSON
            // var response_json = JSON.parse(this.responseText);
            // var records = response_json.records;
            
            // so form can submit
            return true
        }
        // Password wrong
        else if (this.readyState == 4 && this.status == 401) {

            passwordOutput.innerHTML = "Incorrect password.";

            // so form will NOT submit
            return false
        }
        // both wrong
        else {

            emailOutput.innerHTML = "Username does not exist.";

            // so form will NOT submit
            return false
        }

    }

    // Using the api verification file to check if the email and password are correct
    var url = "../projectAPI/user/verification.php?email=" + email + "&pw=" + password;

    request.open("GET", url, true);

    request.send();

    return false
    
}


// Under register password, to make show/hide + eye logo dynamic
var check = false
function switchEye() {
  var current = document.getElementById("togglePassword1")
  if (check == false) {
    document.getElementById("eye1").setAttribute("class", "fa-eye mt-1")
    check = true
    current.innerHTML = "Hide&nbsp"
  }
  else {
    document.getElementById("eye1").setAttribute("class", "fa fa-eye-slash mt-1")
    check = false
    current.innerHTML = "Show&nbsp"
  }
  
}

var ccheck = false
function cswitchEye() {
    var current = document.getElementById("togglePassword2")
    if (ccheck == false) {
      document.getElementById("eye2").setAttribute("class", "fa-eye mt-1")
      ccheck = true
      current.innerHTML = "Hide&nbsp"
    }
    else {
      document.getElementById("eye2").setAttribute("class", "fa fa-eye-slash mt-1")
      ccheck = false
      current.innerHTML = "Show&nbsp"
    }
    
  }


function signOut() {
    sessionStorage.clear();
    window.location.replace("/AlterTail/index.html");
}


function loggedIn() {
    if (sessionStorage.length != 0) {
        getProfileDetails(sessionStorage.getItem("email"), false)
    }
    else {
        document.getElementById("registerProfile").innerHTML = `
        <a href="" class="nav-link" style="padding-bottom:unset;" data-toggle="modal" id="registerSignin" data-target="#registerSigninModal">Register / Login</a>
        `;
    }
}

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
            // var image_url = profile.image_url;
           }

            if (isProfilePage) {

            }
            else {
                var registerProfile = document.getElementById("registerProfile");
        
                registerProfile.innerHTML = `
                <div class="dropdown">
                    <a class="nav-link" href="profile.html" style="padding-bottom:unset;" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ${username}&nbsp<img id="profileImage" src="images/profile_image.jpg" /></a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="profile.html">My Profile</a>
                        <a class="dropdown-item" href="#" onclick="signOut()">Sign Out</a>
                    </div>
                </div>
                `;
            }

        }

    }

    // Using the api to retrieve the user's profile details
    var url = "projectAPI/user/retrieveProfile.php?email=" + email;

    request.open("GET", url, true);

    request.send();

}


function saveSession() {
    sessionStorage.setItem("email", document.getElementById("registerEmail").value);
}