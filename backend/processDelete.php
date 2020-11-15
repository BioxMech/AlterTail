<?php
require_once "common.php";
require_once "appointmentDAO.php";

$email = $_POST["email"];
$shop_name = $_POST["shop_name"];


$dao = new appointmentDAO();
$isAddOK = $dao->delete($email, $shop_name);

if ($isAddOK) {
    header("Location: ../appointment.html");
    exit;
}
else {
    echo '<script>alert("Appointment failed to delete, please contact admin at About Us page.")</script>';
    header("Location: ../aboutus.html");
    exit;
}
?>