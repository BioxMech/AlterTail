<?php

class Service {
    // database connection and table name
    private $conn;
    private $table_name = "seller_service";

    //object properties
    public $email;
    public $shop_name;
    public $service_id;


    //constructor with $db as database connection
    public function __construct($db) {
        $this->conn=$db;
    }

    public function retrieveShop($shop_name) {
        $query = "SELECT * FROM seller_service WHERE shop_name = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $email);

        $stmt->execute();

        return $stmt;
    }


}



?>