<?php

class Seller {
    // database connection and table name
    private $conn;
    private $table_name = "seller";

    //object properties
    public $email;
    public $shop_name;
    public $street_address;
    public $shop_summary;
    public $shop_description;
    public $schedule_id;
    public $unit;
    public $postal_code;
    public $shop_category;
    public $rating;
    public $rating_num;
    public $image_url;

    public $service_id;
    public $service_title;
    public $service_lead_time;
    public $service_price;
    public $service_description;
    public $service_image_url;

    //constructor with $db as database connection
    public function __construct($db) {
        $this->conn=$db;
    }

    public function fetch($shop_name) {
        $query = "SELECT * FROM seller WHERE shop_name LIKE '%' ? '%' ORDER BY shop_name ASC LIMIT 10";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $shop_name);    

        $stmt->execute();

        return $stmt;
    }

    public function retrieveAllShop() {
        $query = "SELECT * FROM seller";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function retrieveAllShopByRating() {
        $query = "SELECT * FROM seller ORDER BY rating DESC";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function retrieveShop($email) {
        $query = "SELECT * FROM seller WHERE email = :email";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":email", $email);

        $stmt->execute();

        return $stmt;
    }

    public function retrieveShopPage($shop_name) {
        $query = "SELECT * FROM seller_service s, service v, seller e
        WHERE s.service_id = v.service_id and e.shop_name = s.shop_name
        and e.shop_name = :shop_name";

        // $query = "select * from seller s, seller_service e where s.shop_name = 'Alt-To-Fit';";

        // $query = "SELECT * from seller where shop_name = :shop_name";


        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":shop_name", $shop_name,PDO::PARAM_STR);

        $stmt->execute();

        return $stmt;
    }

    public function retrieveAlterationShop() {
        $query = "SELECT * FROM seller WHERE shop_category = 'Alteration' ";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function retrieveTailorShop() {
        $query = "SELECT * FROM seller WHERE shop_category = 'Tailoring' ";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }



}



?>