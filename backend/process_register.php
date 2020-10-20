<?php

require_once "common.php";

$email = $_POST['email'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$gender = $_POST['gender'];
$username = $_POST['username'];
$pw = $_POST['pw'];
$phone = $_POST['phone'];
$street_address = $_POST['street_address'];
$unit = $_POST['unit'];
$postal_code = $_POST['postal_code'];
$shopname = $_POST['shopname'];

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