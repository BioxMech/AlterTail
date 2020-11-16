<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

      <!-- Font Awesome CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
      <!-- Font Awesome Script -->
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

    <!-- Vue.js CDN V2 & Axios -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <title>Payment Page</title>

    <!-- Title Image -->
    <link rel="icon" href="../images/logo4.jpg" type="image/jpg">

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

      <!-- Title Image -->
      <link rel="icon" href="../images/logo4.jpg" type="image/jpg">
      <!-- Custom CSS -->
      <link rel="stylesheet" href="../css/main.css">
      <link rel="stylesheet" href="../css/loader.css">
      <link rel="stylesheet" href="../css/animation.css">
      <!-- <link rel="stylesheet" href="css/buttons.css"> -->
      <link rel="stylesheet" href="../css/buttonEffects.css">
      <link rel="stylesheet" href="../css/form.css">
</head>

<body onload="loggedIn();">

    <!-- Start Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light" >
        
  
        <!-- Hamburger Name -->
        <button class="navbar-toggler mr-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
  
        <a class="navbar-brand mr-auto" href="index.html">
            <img src="../images/logo.jpg" class="d-inline-block align-top navBarLogo" loading="lazy">
        </a>
        
        <!-- Collapse Content (Nav Bar) -->
        <div class="collapse navbar-collapse" id="navbarNav">
                
            <!-- Left Side Nav -->
            <ul class="navbar-nav mr-auto" id="leftSideNav">
                <li class="nav-item">
                    <a class="nav-link current" href="../index.html" style="padding-bottom:unset;" >Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../location.html" style="padding-bottom:unset;" >Tailoring</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../alteration.html" style="padding-bottom:unset;" >Alteration</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../aboutUs.html" style="padding-bottom:unset;" >About Us</a>
                </li>
            </ul>      
        </div>
        <!-- End of collapse content (Nav Bar) -->

        <!-- Right side -->
        <div id="navbarNavRight">
            <ul class="navbar-nav flex-row ml-auto" id="registerProfile">
              <li class="nav-item mt-2 mr-1" id="change">
                <!-- Search bar -->
                <search-component></search-component>
             </li>
             <div id="change2">
                <!-- Replace me with Sign in or Profile -->
             </div>
            </ul>
        </div>
        <!-- End of right side -->
        
    </nav>
    <!-- End Navigation Bar -->


    <!-- Start of Register/Sign up modal -->
  <div class="modal fade" id="registerSigninModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">

        <!-- Tabs -->
        <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Register</a>
            </li>
        </ul>
        <!-- End of Tabs -->

        <!-- <div class="modal-header">
          <img src="images/logo.jpg" class="modalFormImage">
          <h5 class="modalDescription mb-4">All-in-one tailoring/alteration/cleaning services platform</h5>
        </div> -->

        <div class="modal-body">
            <div class="tab-content" id="pills-tabContent">

                <!-- Sign in tab -->
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    <!-- Sign in forms -->
                    <!-- <form class="form-signin" method="POST" id="root"> -->
                    <form class="form-signin" action="../backend/process_login.php" method="POST" id="signInForm">

                        <img src="../images/logo.jpg" class="modalFormImage">
                        <h5 class="modalDescription mb-4">All-in-one tailoring/alteration/cleaning services platform</h5>
                            
                        <div class="form-group row">
                          <i class="fas fa-envelope prefix modalIcon"></i>
                          <div class="col-sm-11 ml-auto">
                            <div class="form-label-group row">
                              <input type="text" class="form-control modalInput" id="signinEmail" placeholder="email" required name="email" >
                              <span class="border"></span>
                              <label for="signinEmail">Email Address</label>
                            </div>
                            <!-- Error Message -->
                            <div id="emailOutput"></div>
                          </div>
                        </div>
                        
                        <div class="form-group row">
                          <i class="fas fa-lock prefix modalIcon"></i>
                          <div class="col-sm-11 ml-auto">
                            <div class="form-label-group row">
                            <input type="password" class="form-control modalInput" id="psw" placeholder="password" required="" name="password" >
                            <span class="border"></span>
                            <label for="psw"></i>Password</label>
                          </div>
                          <!-- Error Message -->
                          <div id="passwordOutput"></div>
                        </div>
                        
                        </div>
                        <div class="form-group form-check row">
                          <input type="checkbox" class="form-check-input" id="rememberMe">
                          <label class="form-check-label" for="rememberMe">Remember Me</label>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="clearAllSignin()">Close</button>
                            <input type="submit" class="btn btn-dark" value="Sign in" id="signinSubmit">
                        </div>
                    </form>
                    <!-- End of sign in forms -->
                </div>
                <!-- End of Signin Tab -->

                <!-- Register Tab -->
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                    <!-- Register form -->
                    <form class="form-signin needs-validation" id="myForm1" action="../backend/process_register.php" method="POST" autocomplete="off" onsubmit="saveSession()">
                        <img src="../images/logo.jpg" class="modalFormImage">
                        <h5 class="modalDescription mb-4">All-in-one tailoring/alteration/cleaning services platform
                        <br>Sign up with us now to get your clothing or bag cleaned, altered or tailored!</h5>

                        <div class="form-label-group row">
                          <input type="text" class="form-control" v-bind:class="{'is-invalid': emailnotValid, 'is-valid': emailisValid }" id="registerEmail" placeholder="email" required="" name="email"
                          pattern="^[a-zA-Z\d+._]+@([\w-]+\.)+[\w-]{2,4}$" v-model="registerEmail" v-on:keyup="checkEmail">
                          <label for="registerEmail">Email Address</label>
                          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                          <div class="valid-feedback" v-bind:style="emailValidStyle"> {{ emailValid }} </div>
                          <div class="invalid-feedback"> {{ emailInvalid }} </div>
                        </div>

                        <div class="form-label-group row">
                          <input type="text" class="form-control" v-bind:class="{'is-invalid': usernamenotValid, 'is-valid': usernameisValid}" id="registerUsername" placeholder="username" required="" name="username" 
                          pattern="^[a-zA-Z\d+]{3,15}$" v-model="registerUsername" v-on:keyup="checkUsername">
                          <label for="registerUsername">Username</label>
                          <small class="form-text text-muted">It will also be your display name.</small>
                          <div class="valid-feedback" v-bind:style="usernameValidStyle"> {{ usernameValid }} </div>
                          <div class="invalid-feedback"> {{ usernameInvalid }} </div>
                        </div>
                        
                        <!-- <div class="form-row row">
                          <div class="col-sm-6">
                            <div class="form-label-group">
                              <input type="text" class="form-control" id="registerFirstName" placeholder="firstName" required="" name="fname">
                              <label for="registerFirstName"></i>First Name</label>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-label-group">
                              <input type="text" class="form-control" id="registerLastName" placeholder="lastName" required="" name="lname">
                              <label for="registerLastName"></i>Last Name</label>
                            </div>
                          </div>
                        </div> -->

                        <div class="form-group">
                          <div class="form-label-group row">
                            <input type="text" class="form-control" id="registerName" placeholder="name" name="name" pattern="^[a-zA-Z\s]{3,}$" 
                            v-model="registerName" v-on:blur="display" v-on:focus="display" required>
                            <label for="registerName">Name</label>
                            <small class="form-text text-muted">First name + Last Name | For example: Bob Dylan</small>
                            <div class="valid-feedback">You have a nice name.</div>
                            <div class="invalid-feedback"></div>
                          </div>
                          <input type="hidden" name="SuperSaaS_user_id" id="SuperSaaS_user_id">
                        </div>

                        <div class="form-check form-check-inline row">
                          Gender: &nbsp
                        </div>
                        <div class="form-check form-check-inline row">
                          <input class="form-check-input" type="radio" name="gender" id="male_btn" value="Male" required>
                          <label class="form-check-label" for="male_btn" style="padding-right: 5px;">
                            Male
                          </label>
                        </div>
                        &nbsp
                        <div class="form-check form-check-inline row mb-3">
                          <input class="form-check-input" type="radio" name="gender" id="female_btn" value="Female">
                          <label class="form-check-label" for="female_btn">
                            Female
                          </label>
                        </div>

                        <div class="form-label-group row" >
                          <input type="text" class="form-control" id="registerPhoneNumber" placeholder="Phone Number" required="" name="phone" pattern="[0-9]{8,8}">
                          <label for="registerPhoneNumber"></i>Phone Number</label>
                          <small class="form-text text-muted">For example "98763210"</small>
                          <div class="valid-feedback">Your phone number looks good!</div>
                          <div class="invalid-feedback">Your phone number is invalid.</div>
                        </div>

                        <div class="form-label-group row">
                          <input type="text" class="form-control" id="registerStreetAddress" placeholder="Address" required="" name="street_address" pattern="^[a-zA-Z0-9\s]{10,}$">
                          <label for="registerStreetAddress">Street Address</label>
                          <small class="form-text text-muted">Street name, street number and block number</small>
                          <div class="valid-feedback">Your street address looks good!</div>
                          <div class="invalid-feedback">Your street address is invalid.</div>
                        </div>

                        <div class="form-label-group row">
                          <input type="text" class="form-control" id="registerUnit" placeholder="Unit" name="unit" pattern="\d{1,2}-\d{2,4}">
                          <label for="registerUnit">Unit</label>
                          <small class="form-text text-muted">For example: 05-64</small>
                          <!-- <div class="valid-feedback">Your unit number looks good!</div>
                          <div class="invalid-feedback">Your unit number is invalid.</div> -->
                        </div>

                        <div class="form-label-group row">
                          <input type="text" class="form-control" id="registerPostal" placeholder="Postal" required name="postal_code" pattern="(?=.*\d).{6,6}">
                          <label for="registerPostal">Postal Code</label>
                          <small class="form-text text-muted">For example: 512678</small>
                          <div class="valid-feedback">Your postal code looks good!</div>
                          <div class="invalid-feedback">Your postal code is invalid.</div>
                        </div>
                        
                        <div class="form-label-group row">
                          <input type="password" class="form-control" id="registerPassword" placeholder="password" required="" name="pw"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" v-model="registerPassword" v-on:blur="display" v-on:focus="display" required>
                          <label for="registerPassword"></i>Password</label>
                          
                          <span id="togglePassword1">Show&nbsp</span>password: <i class="fa fa-eye-slash mt-1" id="eye1" aria-hidden="true"  class="bg-dark" onclick="if (registerPassword.type == 'text') registerPassword.type = 'password';
                          else registerPassword.type = 'text'; switchEye()" ></i>

                          <div class="valid-feedback">Your password meets all the requirements!</div>
                          <div v-if="show" class="invalid-feedback"> 
                            <ul style="list-style-type: none;">
                              <li>
                                <span class="text-success">
                                  {{ passwordLength() }}</span>
                                <div v-if="hideLength">✖ Minimum of 6 to 18 characters long</div>
                              </li>
                              <li>
                                <span class="text-success">
                                  {{ passwordLower() }}</span>
                                <div v-if="hideLower">✖ MUST contain at least one lowercase letter.</div>
                              </li>
                              <li>
                                <span class="text-success">
                                  {{ passwordUpper() }}</span>
                                <div v-if="hideUpper">✖ MUST contain at least one uppercase letter.</div>
                              </li>
                              <li>
                                <span class="text-success">
                                  {{ passwordNumber() }}</span>
                                <div v-if="hideNumber">✖ MUST contain at least one number.</div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="form-label-group row">
                          <input type="password" id="cregisterPassword" class="form-control myCpwdClass" placeholder="password" required="" name="pw2" 
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required>
                          <label for="cregisterPassword"></i>Confirm Password</label>

                          <div id="cPwdValid" class="valid-feedback">Passwords Match</div>
                          <div id="cPwdInvalid" class="invalid-feedback"></div>
                              
                          <span id="togglePassword2">Show&nbsp</span>password: <i class="fa fa-eye-slash mt-1" id="eye2" aria-hidden="true"  class="bg-dark" onclick="if (cregisterPassword.type == 'text') cregisterPassword.type = 'password';
                          else cregisterPassword.type = 'text'; cswitchEye()" ></i>

                        </div>
                          
                        
                        <div class="form-group form-check row">
                          <input type="checkbox" class="form-check-input" id="registerPromotion">
                          <label class="form-check-label" for="registerPromotion">I'd like to receive exclusive offers and promotions via SMS</label>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="clearAllRegister()">Close</button>
                            <!-- <button type="button" class="btn btn-primary">Sign up</button> -->
                            <input type="submit" class="btn btn-primary" value="Sign up" id="submitBtn">
                        </div>
                        <small class="form-text text-muted">By clicking "SIGN UP"; I agree to AlterTail's Terms of Use and Privacy Policy</small>
                    </form>
                    <!-- End of register form -->
                </div>
                <!-- End of register tab -->
              </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Register/Sign up modal -->
  <hr style="margin: 0;">


  <div class="container">
    <h2 class="my-4 text-center">Payment</h2>
    <form action="./charge.php" method="post" id="payment-form">
      <div class="form-row">
       <input type="text" name="first_name" class="form-control mb-3 StripeElement StripeElement--empty" placeholder="First Name">
       <input type="text" name="last_name" class="form-control mb-3 StripeElement StripeElement--empty" placeholder="Last Name">
       <input type="email" name="email" class="form-control mb-3 StripeElement StripeElement--empty" placeholder="Email Address">
       <input type="hidden" name="shop_name">
       <input type="hidden" name="time">
       

        <?php
        // $Total = $_GET['Total']; 
        echo "<input type='hidden' id='shop_page_total' name='Total' value=''>";
        echo "<input type='hidden' id='shop_page_user_email' name='user_email' value=''>";
        echo "<input type='hidden' id='shop_page_seller_email' name='seller_email' value=''>";
        echo "<input type='hidden' id='shop_page_name' name='name' value=''>";
        echo "<input type='hidden' id='shop_page_phone' name='phone' value=''>";
        echo "<input type='hidden' id='shop_page_schedule_id' name='schedule_id' value=''>";
        echo "<input type='hidden' id='shop_page_timeslot' name='timeslot' value=''>";
        echo "<input type='hidden' id='shop_page_shop_name' name='shop_name' value=''>";
        echo "<input type='hidden' id='shop_page_selected_services' name='selected_services' value=''>";
        echo "<input type='hidden' id='shop_page_image_url' name='image_url' value=''>";
        echo "<input type='hidden' id='shop_page_shop_desc' name='service_desc' value=''>";
        // echo "<input type='hidden' id='shop_page_shop_image' name='shop_image' value=>";
        ?>

       <div id="card-element" class="form-control">
          <!-- a Stripe Element will be inserted here. -->
        </div>

        <!-- Used to display form errors -->
        <div id="card-errors" role="alert"></div>
      </div>

      <button type='submit'>Submit Payment</button>
      <!-- <input type='submit' value='Submit Payment'> -->
    </form>
  </div>

<!-- Footer -->
<footer class="page-footer font-small text-white bg-dark pt-4" >

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto">

        <!-- Content -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">AlterTail</h5>
        <p>AlterTail is a one-stop fashion maintenance portal for residents in Singapore, providing fashion services such as alteration service, tailors and dry-cleaners.</p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>

        <ul class="list-unstyled">
          <li>
            <a href="../aboutus.html">About Us</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Services</h5>

        <ul class="list-unstyled">
          <li>
            <a href="../alteration.html">Alterations</a>
          </li>
          <li>
            <a href="../location.html">Tailoring</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Information</h5>

        <ul class="list-unstyled">
          <li>
            <a href="../terms.html">Terms and Conditions</a>
          </li>
          <li>
            <a href="../privacypolicy.html">Privacy Policy</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- <hr> -->
  <hr>

  <!-- Social buttons -->
  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1" href="https://www.facebook.com/sg.altertail.3" target="_blank" rel="noopener"> 
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1" href="https://twitter.com/AltertailS" target="_blank" rel="noopener">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
  </ul>
  <!-- Social buttons -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="../aboutus.html">AlterTail.co</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->



  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://js.stripe.com/v3/"></script>
  <script src="./js/charge.js"></script>
  <script src="../js/loaded.js"></script>

  <script>
    console.log(sessionStorage.getItem("shop_page_selected_services"));
    console.log(sessionStorage.getItem("shop_page_user_email"));
    console.log(sessionStorage.getItem("shop_page_name"));
    console.log(sessionStorage.getItem("shop_page_phone"));
    console.log(sessionStorage.getItem("shop_page_schedule_id"));
    console.log(sessionStorage.getItem("shop_page_timeslot"));
    console.log(sessionStorage.getItem("shop_page_total"));
    console.log(sessionStorage.getItem("shop_page_shop_name"));
    console.log(sessionStorage.getItem("shop_page_seller_email"))
    console.log(sessionStorage.getItem("shop_page_image_url"));
    console.log(sessionStorage.getItem("shop_page_service_desc"));
    // console.log(sessionStorage.getItem("shop_page_shop_image"));
    var total_amt = sessionStorage.getItem("shop_page_total");
    // console.log(total_amt);
    document.getElementById("shop_page_total").value = total_amt;
    document.getElementById("shop_page_user_email").value = sessionStorage.getItem("shop_page_user_email");
    document.getElementById("shop_page_seller_email").value = sessionStorage.getItem("shop_page_seller_email");
    document.getElementById("shop_page_name").value = sessionStorage.getItem("shop_page_name");
    document.getElementById("shop_page_phone").value = sessionStorage.getItem("shop_page_phone");
    document.getElementById("shop_page_schedule_id").value = sessionStorage.getItem("shop_page_schedule_id");
    document.getElementById("shop_page_timeslot").value = sessionStorage.getItem("shop_page_timeslot");
    document.getElementById("shop_page_shop_name").value = sessionStorage.getItem("shop_page_shop_name");
    document.getElementById("shop_page_selected_services").value = sessionStorage.getItem("shop_page_selected_services");
    document.getElementById("shop_page_image_url").value = sessionStorage.getItem("shop_page_image_url");
    document.getElementById("shop_page_shop_desc").value = sessionStorage.getItem("shop_page_service_desc");
    // document.getElementById("shop_page_shop_image").value = sessionStorage.getItem("shop_page_shop_image");
  </script>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> -->

    <!-- Custom Vue.Js -->
    <script>
        var app = new Vue({
            el: "#myForm1",
            data: {
              emailisValid: false,
              emailnotValid: false,
              usernameisValid: false,
              usernamenotValid: false,
              show: false,
              registerName: '',
              registerPassword: '',
              hideLength: true,
              hideUpper: true,
              hideLower: true,
              hideNumber: true,
              registerUsername: '',
              registerEmail: '',
              usernameValid: '',
              usernameValidStyle: {
                color: 'red'
              },
              emailValid: '',
              emailValidStyle: {
                color: 'red'
              },
              emailInvalid: 'The email address entered is invalid',
              usernameInvalid: 'Username needs to be at least 3 characters long'
            },
            methods: {
              display: function() {
                if (this.show == false) {
                  this.show = true
                }
                else {
                  this.show = false
                }
              },
              passwordLength: function() {
                if (this.registerPassword.length >= 6) {
                  this.hideLength = false;
                  return "✔ MUST contain at least 6 characters"
                }
                this.hideLength = true;
                 
              },
              passwordUpper: function () {
                if (/[A-Z]/.test(this.registerPassword)) {
                  this.hideUpper = false;
                  return "✔ MUST contain at least one uppercase letter."
                }
                this.hideUpper = true;
              },
              passwordLower: function () {
                if (/[a-z]/.test(this.registerPassword)) {
                  this.hideLower = false;
                  return "✔ MUST contain at least one lowercase letter."
                }
                this.hideLower = true;
              },
              passwordNumber: function () {
                if (/[\d]/.test(this.registerPassword)) {
                  this.hideNumber = false;
                  return "✔ MUST contain at least one number."
                }
                this.hideNumber = true;
              },
              checkUsername: function() {
                // URL to an API endpoint
                let url = '../projectAPI/user/checkUsername.php?username=' + this.registerUsername

                // send a req to the above specified API endpoint
                axios.get(url)
                .then(response => {

                  // response is the data
                  let user_objects = response.data

                  // view it
                  // console.log(response.data)

                  this.usernameInvalid = this.registerUsername + " already exist."
                //   this.usernameValidStyle.color = "red"

                  
                  this.usernameisValid = false
                  this.usernamenotValid = true
                })
                .catch(error => {
                  // shows the status, e.g. 404
                  // console.log(error.response.status)
                  this.usernameValid = "You can use " + this.registerUsername + " as your username."
                  this.usernameValidStyle.color = "green"

                  this.usernameInvalid = "Username needs to be at least 3 characters long"

                  this.usernameisValid = true
                  this.usernamenotValid = false
                })
              },
              checkEmail: function() {
                // URL to an API endpoint
                let url = '../projectAPI/user/checkEmail.php?email=' + this.registerEmail

                // send a req to the above specified API endpoint
                axios.get(url)
                .then(response => {

                  // response is the data
                  let user_objects = response.data

                  // view it
                  // console.log(response.data)

                  this.emailInvalid = this.registerEmail + " already exist."
                //   this.emailValidStyle.color = "red"

                  this.emailnotValid = true
                  this.emailisValid = false
                })
                .catch(error => {
                  // shows the status, e.g. 404
                  // console.log(error.response.status)

                  this.emailValid = "You can use " + this.registerEmail + " as your email."
                  this.emailValidStyle.color = "green"

                  this.emailInvalid = "The email address entered is invalid"

                  this.emailnotValid = false
                  this.emailisValid = true
                })
              }
            }
        })


        Vue.component('search-component',  {
          template: `
          <div class="dropdown">
            <input type="text" class="searchBar" placeholder="Search Shop Names" v-model="query" @keyup="getData()" autocomplete="off" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
            <div class="dropdown-menu" v-if="search_data.length">
              <ul class="list-group">
                <a href="#" class="dropdown-item" v-for="data1 in search_data" v-on:click="goToPage( data1.shop_name, data1.schedule_id )">{{ data1.shop_name }}</a>
              </ul>
            </div>
          </div>
          `,
          data:function(){
            return{
              query:'',
              search_data:[],
              shop_name: '',
              schedule_id: ''
            }
          },
          methods:{
            getData:function(){
              let url = '../projectAPI/user/fetch.php?query=' + this.query;

              axios.get(url)
                .then(response => {
                  let user_objects = response.data;
                  this.search_data = user_objects.records
                })
              
            },
            goToPage: function(shop_name, schedule_id) {
              window.location.replace("/AlterTail/shopPage.html?shop_name=" + shop_name + "&schedule_id=" + schedule_id);
            }
          }
        });

        var application = new Vue({
          el:'#registerProfile'
        });


       
    </script>



    <!-- Form animation -->
    <script>
      $(document).ready(function(){
      // ----------- Set all elements as INVALID --------------
      var myInputElements = document.querySelectorAll(".form-control");
      var i;
    //   for (i = 0; i < myInputElements.length; i++) {
    //     myInputElements[i].classList.add('is-invalid');
    //     myInputElements[i].classList.remove('is-valid');
    //   }
      // ------------ Check passwords similarity --------------
      $('#registerPassword, #cregisterPassword').on('keyup', function () {
        if ($('#registerPassword').val() != '' && $('#cregisterPassword').val() != '' && $('#registerPassword').val() == $('#cregisterPassword').val() ) {
          $('#cPwdValid').show();
          $('#cPwdInvalid').hide();
          $('#cPwdInvalid').html('Passwords Match').css('color', 'green');
          $('.myCpwdClass').addClass('is-valid');
          $('.myCpwdClass').removeClass('is-invalid');
          $("#submitBtn").attr("disabled",false);
          $('#submitBtn').addClass('btn-primary').removeClass('btn-secondary');
          for (i = 0; i < myInputElements.length; i++) {
            var myElement = document.getElementById(myInputElements[i].id);
            if (myElement.classList.contains('is-invalid')) {
              $("#submitBtn").attr("disabled",true);
              $('#submitBtn').addClass('btn-secondary').removeClass('btn-primary');
              break;
            }
          }
        } else {
          $('#cPwdValid').hide();
          $('#cPwdInvalid').show();
          $('#cPwdInvalid').html('Not Matching').css('color', 'red');
          $('.myCpwdClass').removeClass('is-valid');
          $('.myCpwdClass').addClass('is-invalid');
          $("#submitBtn").attr("disabled",true);
          $('#submitBtn').addClass('btn-secondary').removeClass('btn-primary');
        }
      });
      // ----------------- Validate on submit -----------------
      let currForm1 = document.getElementById('myForm1');
      currForm1.addEventListener('submit', function(event) {
        if (currForm1.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
          $("#submitBtn").attr("disabled",false);
          $('#submitBtn').addClass('btn-primary').removeClass('btn-secondary');
          currForm1.classList.add('was-validated');
        }
      }, false);
      // ----------------- Validate on input -----------------
      currForm1.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener(('input'), () => {
          if (input.checkValidity()) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
          } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
          }
          var is_valid = $('.form-control').length === $('.form-control.is-valid').length;
          $("#submitBtn").attr("disabled", !is_valid);
          if (is_valid) {
            $("#submitBtn").attr("disabled",false);
            $('#submitBtn').addClass('btn-primary').removeClass('btn-secondary');
          } else {
            $("#submitBtn").attr("disabled",true);
            $('#submitBtn').addClass('btn-secondary').removeClass('btn-primary');
          }
        });
      });
      // ------------------------------------------------------
    });

    function submitForm(){ 
  // Call submit() method on <form id='myform'>
  document.getElementById('signInForm').submit(); 
} 

    // this is the id of the form
    $("#signInForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var emailOutput = document.getElementById("emailOutput");
    var passwordOutput = document.getElementById("passwordOutput");
    var email = document.getElementById("signinEmail").value;
    var password = document.getElementById("psw").value;
    var name = document.getElementById("registerName").value;

    
    $.ajax({
          type: "GET",
          url: "../projectAPI/user/verification.php?email=" + email + "&pw=" + password,
          data: form.serialize(), // serializes the form's elements.
          success: function(data)
          {
            // $('#signInForm').attr('validated',true);
            // $('#signInForm').submit();

            // sets a session
            sessionStorage.setItem('email', email);
            
            // refreshes the page
            submitForm()

          },
          statusCode: {
              401: function() {
                emailOutput.innerHTML = "";
                // passwordOutput.innerHTML = "Wrong Password";
                passwordOutput.innerHTML = `
                <div class="w3-animate-left text-danger">
                  &#x274C Password is <b>wrong</b> or <b>invalid</b> 
                </div>
                `;
              },
              404: function() {
                passwordOutput.innerHTML = "";
                // emailOutput.innerHTML = "Email does not exist";
                emailOutput.innerHTML = `
                <div class="w3-animate-left text-danger">
                  &#x274C Email does <b>not exist</b> or <b>invalid</b> 
                </div>
                `;
              }
            }
            
        });

        return false; 

    });

// testing purpose
console.log(sessionStorage.getItem('email'));


// Animate the Loader
;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());

    </script>  
</body>
</html>