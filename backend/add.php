<?php

require_once "common.php";

$email = $_GET['email'];
$fname = $_GET['fname'];
$lname = $_GET['lname'];
$gender = $_GET['gender'];
$username = $_GET['username'];
$pw = $_GET['pw'];
$phone = $_GET['phone'];
$street_address = $_GET['street_address'];
$unit = $_GET['unit'];
$postal_code = $_GET['postal_code'];
$shopname = $_GET['shopname'];

$user = new User($email,$fname,$lname,$gender,$username,$pw,$phone,$street_address,$unit,$postal_code,$shopname);
$dao = new UserDAO();
$isAddOK = $dao->add($user);

if ($isAddOK) {
    echo "Person is added";
}
else {
    echo "Person is not added";
}
?>