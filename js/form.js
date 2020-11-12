email = (sessionStorage.getItem("email"));

function clearAllSignin() {
    document.getElementById("signinEmail").value = '';
    document.getElementById("psw").value = '';
    document.getElementById("emailOutput").value = '';
     document.getElementById("passwordOutput").value = '';``
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

function generateSaaS() {
    var SuperSaaS_user_id = "";
    for (var i = 0; i < 3; i++) {
        var n = Math.floor((Math.random(1,9) * 10)).toString();
        SuperSaaS_user_id += n;
    }
    SuperSaaS_user_id += "fk";
    return SuperSaaS_user_id;
}

function CreateUser(email, fname,SuperSaaS_user_id) {
    var request = new XMLHttpRequest();
    // request.withCredentials = true;
    // console.log(email);
    
    request.onreadystatechange = function() {
      console.log(this.readyState);
      console.log(this.status);
      if (this.readyState == 4 && this.status == 200) {
        console.log(request.responseText);
      }
    }

    // var url = `https://www.supersaas.com/api/users/567fk.json?account=PetrasTYR&api_key=60Sdu0PWYumxHliWn1Uieg&user[name]=user1@example.com&user[password]=secret1&user[full_name]=Test%20Name`;
    var url = `https://www.supersaas.com/api/users/${SuperSaaS_user_id}.json?account=PetrasTYR&api_key=60Sdu0PWYumxHliWn1Uieg&user[name]=${email}&user[full_name]=${fname}`;
    request.open("POST",url,true);
    // console.log(email);
    request.send();
    // console.log(email);
  }

function loggedIn() {

    // Signed in already
    if (sessionStorage.length != 0) {
        getProfileDetails(sessionStorage.getItem("email"), false);
        createSaaS();
        console.log("called1");
        console.log(sessionStorage.getItem("SaaSID"));
    }

    //  not yet signed in
    else {
        document.getElementById("registerProfile").innerHTML += `    
            <li class="nav-item mt-2 mr-1" id="change">
                <form>
                    <input type="text" class="searchBar" placeholder="Search Shop Names">
                </form>
            </li>
            <li class="nav-item mt-1" >
                <!-- Replace me with Sign in or Profile -->
                <a href="" class="nav-link" style="padding-bottom:unset;" data-toggle="modal" id="registerSignin" data-target="#registerSigninModal">Register / Login</a>
            </li>
        `;
        var generatedSaaS = generateSaaS();
        console.log("First load " + generatedSaaS)
        document.getElementById("SuperSaaS_user_id").value = generatedSaaS;
    }
}



function createSaaS() {
    if (sessionStorage.getItem("SaaS") == "false") {
        console.log('called SaaS false');
        console.log(sessionStorage.getItem("email"));
        console.log(sessionStorage.getItem("name"));
        console.log(sessionStorage.getItem("SaaSID"));
        // var generatedSaaS = generateSaaS();
        // console.log(generatedSaaS)
        // document.getElementById("SuperSaaS_user_id").value = generatedSaaS;
        CreateUser(sessionStorage.getItem("email"),sessionStorage.getItem("name"),sessionStorage.getItem("SaaSID"));
        sessionStorage.setItem("SaaS",true);
    }
    else {
        console.log("called SaaS not false")
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
            var SuperSaaS_user_id = profile.SuperSaaS_user_id;
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
        
                registerProfile.innerHTML += `
                <li class="nav-item mt-4 mr-1" id="change">
                <form>
                    <input type="text" class="searchBar" placeholder="Search Shop Names">
                </form>
                </li>
                <li class="nav-item mt-1" >
                    <!-- Replace me with Sign in or Profile -->
                    <div class="dropdown">
                        <a class="nav-link" href="profile.html" style="padding-bottom:unset;" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ${username}&nbsp<img id="profileImage" src="images/profile_image.jpg" /></a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="profile.html">My Profile</a>
                            <a class="dropdown-item" href="#" onclick="signOut()">Sign Out</a>
                        </div>
                    </div>
                </li>
                
                `;

                sessionStorage.setItem("SaaSID", SuperSaaS_user_id);
            }

        }

    }

    // Using the api to retrieve the user's profile details
    var url = "projectAPI/user/retrieveProfile.php?email=" + email;

    request.open("GET", url, true);

    request.send();

}

// Call upon Registration
function saveSession() {
    sessionStorage.setItem("email", document.getElementById("registerEmail").value);
    sessionStorage.setItem("SaaS", "false");
    sessionStorage.setItem("name", document.getElementById("registerName").value)
    sessionStorage.setItem("SaaSID", document.getElementById("SuperSaaS_user_id").value)

}