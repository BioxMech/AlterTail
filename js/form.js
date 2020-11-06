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