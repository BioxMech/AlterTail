<?php


// $connect = new PDO("mysql:host=localhost; dbname=AlterTail", "root", "");

// $received_data = json_decode(file_get_contents("php://input"));

// $data = array();
// echo "<script type='text/javascript'>alert('Fetch.php entered');</script>";
// if($received_data->query != '')
// {
//     echo "<script type='text/javascript'>alert($received_data->query);</script>";
    
//  $query = "
//  SELECT shop_name FROM seller 
//  WHERE shop_name LIKE '%".$received_data->query."%' 
//  ORDER BY shop_name ASC 
//  LIMIT 10
//  ";

//  $statement = $connect->prepare($query);

//  $statement->execute();

//  while($row = $statement->fetch(PDO::FETCH_ASSOC))
//  {
//   $data[] = $row;
//  }
// }

// echo json_encode($data);


// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/database.php';
include_once '../objects/Seller.php';
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$user = new Seller($db);

// get search query
if( isset($_GET["query"]) ) {
    // username
    $stmt = $user->fetch($_GET["query"]);
    
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

        $item = array(
            "shop_name" => $shop_name
            );

        array_push($result_arr["records"], $item);

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
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "No records found.")
    );
}


?>