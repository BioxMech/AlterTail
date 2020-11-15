<?php
require_once "common.php";

$shop_page_email = "petras.tan.2019@sis.smu.edu.sg";
// echo $shop_page_email;
 $shop_page_modal = $_POST['name'];
 $shop_page_phone = $_POST['phone'];
 $shop_page_schedule_id = $_POST['schedule_id'];
 $shop_page_timeslot = $_POST['timeslot'];
//  $shop_page_shop_name = $_POST['shop_name'];
 $shop_page_shop_name = "Alt-To-Fit";
 $shop_page_selected_services = $_POST['selected_services'];
 echo $shop_page_email . "<br>";
 echo $shop_page_phone . "<br>";
 echo $shop_page_schedule_id . "<br>";
 echo $shop_page_timeslot . "<br>";
 echo $shop_page_selected_services . "<br>";
//  echo $shop_page_email;
 $appointment = new Appointment($shop_page_email,"alt.fit@gmail.com",$shop_page_schedule_id,$shop_page_shop_name,"url ",$shop_page_selected_services,"hello","ret",$shop_page_timeslot);
 $dao = new AppointmentDAO();
 $isAddOK = $dao->add($appointment);
 if ($isAddOK) {
     echo "added";
 }
 else {
     echo "not";
 }
?>