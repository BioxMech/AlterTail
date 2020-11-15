<?php
  require_once('vendor/autoload.php');
  require_once('config/db.php');
  require_once('lib/pdo_db.php');
  require_once('models/Customer.php');
  require_once('models/Transaction.php');
  require_once("../backend/common.php");

  \Stripe\Stripe::setApiKey('sk_test_51HYTEuFW7whrGeRW9iflK349xjEmCUf4OOsSMRuztxa8DY1MDhCNdupz9ZGr3ayP1upXm1JW0aYUxd6okkikK9TY00rxWyiEyK');

 // Sanitize POST Array
 $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);

 $first_name = $_POST['first_name'];
 $last_name = $_POST['last_name'];
 $email = $_POST['email'];
 $shop_page_email = $_POST['user_email'];
//  $shop_page_modal = $_POST['name'];
 $shop_page_phone = $_POST['phone'];
 $shop_page_schedule_id = $_POST['schedule_id'];
 $shop_page_timeslot = $_POST['timeslot'];
 $shop_page_shop_name = $_POST['shop_name'];
 $shop_page_selected_services = $_POST['selected_services'];
 $token = $_POST['stripeToken'];
 $Total = $_POST['Total'] * 100;

 //Create Appointment
 $appointment = new Appointment($shop_page_email,$shop_page_email,$shop_page_schedule_id,$shop_page_shop_name," ",$shop_page_selected_services,"hello",$shop_page_selected_services,$shop_page_timeslot);
?>

<?php
 $dao = new AppointmentDAO();
 $isAddOK = $dao->add($appointment);
?>



<?php
// Create Customer In Stripe
$customer = \Stripe\Customer::create(array(
  "email" => $email,
  "source" => $token
));

// Charge Customer
$charge = \Stripe\Charge::create(array(
  "amount" => $Total,
  "currency" => "sgd",
  "description" => "Payment",
  "customer" => $customer->id
));

// Customer Data
$customerData = [
  'id' => $charge->customer,
  'first_name' => $first_name,
  'last_name' => $last_name,
  'email' => $email
];

// Instantiate Customer
$customer = new Customer();

// Add Customer To DB
$customer->addCustomer($customerData);


// Transaction Data
$transactionData = [
  'id' => $charge->id,
  'customer_id' => $charge->customer,
  'product' => $charge->description,
  'amount' => $charge->amount,
  'currency' => $charge->currency,
  'status' => $charge->status,
];

// Instantiate Transaction
$transaction = new Transaction();

// Add Transaction To DB
$transaction->addTransaction($transactionData);

// Redirect to success
header('Location: success.php?tid='.$charge->id.'&product='.$charge->description);