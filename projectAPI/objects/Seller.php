<?php

class User {
    // database connection and table name
    private $conn;
    private $table_name = "seller";

    //object properties
    public $email;
    public $shop_name;
    public $street_address;
    public $shop_summary;
    public $shop_description;
    public $unit;
    public $postal_code;
    public $shop_category;
    public $rating;
    public $rating_num;
    public $image_url;

    //constructor with $db as database connection
    public function __construct($db) {
        $this->conn=$db;
    }

    public function retrieveShop($email) {
        $query = "SELECT * FROM seller WHERE email = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $email);

        $stmt->execute();

        return $stmt;
    }


}



?>