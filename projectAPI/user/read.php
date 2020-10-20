<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/User.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

//initialize object
$user = new User($db);

//query products
$stmt = $user->read();
$num = $stmt->rowCount();

if($num>0) {
    $result_arr = array();
    $result_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $item = array(
            "email" => $email,
            "fname" => $fname,
            "lname" => $lname,
            "gender" => $gender,
            "username" => $username,
            "pw" => $pw,
            "phone" => $phone,
            "street_address" => $street_address,
            "unit" => $unit,
            "postal_code" => $postal_code,
            "shopname" => $shopname
        );
        array_push($result_arr["records"], $item);
    }
    $date = new DateTime(null, new DateTimeZone('Asia/Singapore'));
    $result_arr["info"] = array(
        "author" => "Petras",
        "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
    );

    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($result_arr);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "No records found.")
    );
}




?>