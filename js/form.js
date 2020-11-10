function clearAllSignin() {
    document.getElementById("signinEmail").value = '';
    document.getElementById("signinPassword").value = '';
}

function clearAllRegister() {
    document.getElementById("registerEmail").value = '';
    document.getElementById("registerUserName").value = '';
    // document.getElementById("registerFirstName").value = '';
    // document.getElementById("registerLastName").value = '';
    document.getElementById("registerName").value = '';
    document.getElementById("registerPhoneNumber").value = '';
    document.getElementById("registerPassword").value = '';
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


// // this is the id of the form
// $("#signInForm").submit(function(e) {

//       e.preventDefault(); // avoid to execute the actual submit of the form.

//       var form = $(this);
//       var emailOutput = document.getElementById("emailOutput");
//       var passwordOutput = document.getElementById("passwordOutput");
//       var email = document.getElementById("signinEmail");
//       var password = document.getElementById("psw");

//       $.ajax({
//             type: "GET",
//             url: "projectAPI/user/verification.php?email=" + email + "&pw=" + password,
//             data: form.serialize(), // serializes the form's elements.
//             success: function(data)
//             {
//                 alert(data); // show response from the php script.
//             },
//             statusCode: {
//                 401: function() {
//                 alert( "Incorrect password" );
//                 }
//               }
//           });
//       alert("WORKS")
//       return true
// });



// Under register password, to make show/hide + eye logo dynamic
var check = false
function switchEye() {
  var current = document.getElementById("togglePassword1")
  if (check == false) {
    document.getElementById("eye").setAttribute("class", "fa-eye mt-1")
    check = true
    current.innerHTML = "Hide&nbsp"
  }
  else {
    document.getElementById("eye").setAttribute("class", "fa fa-eye-slash mt-1")
    check = false
    current.innerHTML = "Show&nbsp"
  }
  
}


