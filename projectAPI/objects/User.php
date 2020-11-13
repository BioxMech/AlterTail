<?php

class User {
    // database connection and table name
    private $conn;
    private $table_name = "user";

    //object properties
    public $email;
    public $fname;
    public $SuperSaaS_user_id;
    public $gender;
    public $username;
    public $pw;
    public $phone;
    public $street_address;
    public $unit;
    public $postal_code;
    public $image_url;
    // public $shopname;

    //constructor with $db as database connection
    public function __construct($db) {
        $this->conn=$db;
    }

    public function retrieveShopPage($shop_name) {
        $query = "SELECT * FROM shop_service WHERE shop_name = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $shop_name);

        $stmt->execute();

        return $stmt;
    }

    public function updateProfile($email, $username, $phone, $gender){
        $query = "UPDATE user SET email= ?, username = ?, phone = ?, gender = ? WHERE email = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $email);

        $stmt->execute();

        return $stmt;
    }

    
    public function updatePassword($email, $pw){
        $query = "UPDATE user SET pw = ? WHERE email = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $email);

        $stmt->execute();

        return $stmt;
    }

    public function retrieveProfile($email) {
        $query = "SELECT * FROM user WHERE email = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $email);

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