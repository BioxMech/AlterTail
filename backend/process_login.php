<?php
require_once "common.php";
require_once "UserDAO.php";

$email = $_POST["email"];
$pw = $_POST['password'];

$dao = new UserDAO();
$hashed = $dao->getHashedPassword($email);
$status = password_verify($pw, $hashed);

if ($status) {
    session_start();
    $_SESSION['email'] = $email;
    echo "Success!";
    header("Location: post_login.php");
}
else {
    echo "Failed!";
    // echo $email;
    echo $hashed;
    header("Location: ../index.html#");
}

?>