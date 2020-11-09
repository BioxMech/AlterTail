<?php

class User {
    // database connection and table name
    private $conn;
    private $table_name = "user";

    //object properties
    public $email;
    public $fname;
    public $lname;
    public $gender;
    public $username;
    public $pw;
    public $phone;
    public $street_address;
    public $unit;
    public $postal_code;
    public $shopname;

    //constructor with $db as database connection
    public function __construct($db) {
        $this->conn=$db;
    }

    public function retrieveShopPage() {
        $query = "SELECT * FROM shop_service";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function retrieveProfile() {
        $query = "SELECT * FROM user";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }


    public function verification($email) {

        // select all query
        $query = "SELECT * FROM user WHERE email = ?";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind
        $stmt->bindParam(1, $email);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    public function checkUsername($username) {
         // select all query
         $query = "SELECT * FROM user WHERE username = ?";

         // prepare query statement
         $stmt = $this->conn->prepare($query);
 
         // bind
         $stmt->bindParam(1, $username);
 
         // execute query
         $stmt->execute();
 
         return $stmt;
    }

    public function checkEmail($email) {
        // select all query
        $query = "SELECT * FROM user WHERE email = ?";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind
        $stmt->bindParam(1, $email);

        // execute query
        $stmt->execute();

        return $stmt;
   }

}



?>