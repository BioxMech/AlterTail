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
  
// initialize object
$user = new User($db);

// get search query
if( isset($_GET["email"]) && isset($_GET["pw"])) {
    // Gender and Year
    $stmt = $user->verification($_GET["email"]);
    
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "Query parameters are not set. No results.")
    );
    exit;
}

$num = $stmt->rowCount();

// check if more than 0 record found
if($num > 0) {
  
    // products array
    $result_arr = array();
    $result_arr["records"] = array();
    
    while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
        
        $status = password_verify($_GET["pw"], $pw);

        if ($status) {
            $item = array(
            "email" => $email,
            "pw" => $pw
            );

        array_push($result_arr["records"], $item);
        }

        
    }

    if (count($result_arr['records']) == 0) {
        // set response code - 404 Not found
        http_response_code(401);
        
        // tell the user no items found
        echo json_encode(
            array("message" => "Unauthorized: Incorrect password.")
        );
        die;
    }

    // Add info node (1 per response)
    $date = new DateTime(null, new DateTimeZone('Asia/Singapore'));
    $result_arr["info"] = array(
        "author" => "Jason",
        "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // show products data
    echo json_encode($result_arr);

    exit;
}
// else {
//     // set response code - 404 Not found
//     http_response_code(404);
  
//     // tell the user no items found
//     echo json_encode(
//         array("message" => "No records found.")
//     );
// }

    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "No records found.")
    );
?>