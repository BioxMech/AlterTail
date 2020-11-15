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

  <title>Payment Page</title>

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

<body>

      <!-- Start Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-light" >
        
  
        <!-- Hamburger Name -->
        <button class="navbar-toggler mr-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
  
        <a class="navbar-brand mr-auto" href="../index.html">
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
                    <a class="nav-link" href="../location.html" style="padding-bottom:unset;" >Alteration</a>
                </li>
                <li class="nav-item">
                    <!-- Dropdown menu -->
                    <div class="dropdown">
                        <a class="nav-link" href="#" style="padding-bottom:unset;" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cleaning</a>
                        <!-- Options -->
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="../location.html">Bag Cleaning</a>
                            <a class="dropdown-item" href="../location.html">Dry Cleaning</a>
                        </div>
                        <!-- Options -->
                    </div>
                    <!-- End of dropdown menu -->
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../aboutUs.html" style="padding-bottom:unset;" >About Us</a>
                </li>
            </ul>      

            <!-- Right Side -->
            <ul class="navbar-nav ml-auto" id="rightNav">

                <li class="nav-item">
                    <a href="" class="nav-link" style="padding-bottom:unset;" data-toggle="modal" id="registerSignin" data-target="#registerSigninModal">Register / Login</a>
                    <!-- <button type="button" class="btn btn-outline-dark">
                        Hello Mr. Trump <img id="profileImage" class="nav-link" href="#" src="images/profile_image.jpg" />
                    </button> -->
                    <!-- <a href=""><img id="profileImage" class="nav-link" href="#" src="images/profile_image.jpg" /></a> -->
                </li>
            </ul>
            <!-- End of right side -->

        </div>
        <!-- End of collapse content (Nav Bar) -->
        <!-- <div id="navbarNav">
            <ul class="navbar-nav mr-auto" >
                <li class="nav-item" id="registerProfile">
                -->
                    <a href="../profile.html" class="nav-link"> <!-- User's Name --> <img id="profileImage" src="../images/profile_image.jpg"/></a>
                </li>
            </ul>
            
        </div> 
    </nav>
   
    <!-- End Navigation Bar -->
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
<footer class="page-footer font-small text-white bg-dark pt-4" style="margin-top: 200px;">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto">

        <!-- Content -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">AlterTail</h5>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About us</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">About Us</a>
          </li>
          <li>
            <a href="#!">Community</a>
          </li>
          <li>
            <a href="#!">Career</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
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
            <a href="#!">Alterations</a>
          </li>
          <li>
            <a href="#!">Tailoring</a>
          </li>
          <li>
            <a href="#!">Bag Cleaning</a>
          </li>
          <li>
            <a href="#!">Dry Cleaning</a>
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
            <a href="#!">Payment methods</a>
          </li>
          <li>
            <a href="#!">Shipping methods</a>
          </li>
          <li>
            <a href="#!">Terms and conditions</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
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
</body>
</html>