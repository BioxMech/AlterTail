<?php
require_once "common.php";
require_once "UserDAO.php";

$username = $_POST["username"];
$pw = $_POST['pw'];

$dao = new UserDAO();
$hashed = $dao->getHashedPassword($username);
$status = password_verify($pw, $hashed);

if ($status) {
    session_start();
    $_SESSION['username'] = $username;
    echo "Success!";
    header("Location: post_login.php");
}
else {
    echo "Failed!";
    // echo $username;
    echo $hashed;
    header("Location: ../index.html");
}

?>