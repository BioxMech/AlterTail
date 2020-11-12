<?php

require_once "common.php";



function SuperSaaS_user_id() {
    $result = "";
    for ($i=0; $i<3; $i++) {
        $n = rand(1,9);
        $result = $result . $n;
    }
    $result = $result . "fk";

    return $result;
}
$SuperSaaS_user_id = SuperSaaS_user_id();
// $SuperSaaS_user_id = "123fk";

$email = $_POST['email'];
$username = $_POST['username'];
$fname = $_POST['name'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$street_address = $_POST['street_address'];
$unit = $_POST['unit'];
$postal_code = $_POST['postal_code'];
$pw = $_POST['pw'];



$user = new User($email,$fname,$SuperSaaS_user_id,$gender,$username,$pw,$phone,$street_address,$unit,$postal_code);
$dao = new UserDAO();
$isAddOK = $dao->add($user);

if ($isAddOK) {
    echo "Person is added";
    header("Location: ../index.html");
}
else {
    echo "Person is not added";
}


?>

