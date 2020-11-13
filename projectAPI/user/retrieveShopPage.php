<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/Seller.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

//initialize object
$seller = new Seller($db);

//query products
$stmt = $seller->retrieveShopPage($_GET["shop_name"]);
$num = $stmt->rowCount();

if($num>0) {
    $result_arr = array();
    $result_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);


        $item = array(
            "shop_name" => $shop_name,
            "image_url" => $shop_image_url,
            "shop_description" => $shop_description,
            "schedule_id" => $schedule_id,

            "services" => [
                "service_id" => $service_id,
                "service_title" => $service_title,
                "service_lead_time" => $service_lead_time,
                "service_price" => $service_price,
                "service_description" => $service_description,
                "service_image_url" => $service_image_ur
            ]
        );

        array_push($result_arr["records"], $item);
    }
    $date = new DateTime(null, new DateTimeZone('Asia/Singapore'));
    $result_arr["info"] = array(
        "author" => "Jiali",
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