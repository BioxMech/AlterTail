<?php

class User {
    public $email;
    public $fname;
    public $gender;
    public $username;
    public $pw;
    public $phone;
    public $street_address;
    public $unit;
    public $postal_code;
    

    //construct User object
    function __construct($email,$fname,$gender,$username,$pw,$phone,$street_address,$unit,$postal_code) {
        $this->email = $email;
        $this->fname = $fname;
        $this->gender = $gender;
        $this->username = $username;
        $this->pw = $pw;
        $this->phone = $phone;
        $this->street_address = $street_address;
        $this->unit = $unit;
        $this->postal_code = $postal_code;
        
    }

    // getter methods
    public function getEmail() {
        return $this->email;
    }

    public function getFName() {
        return $this->fname;
    }


    public function getGender() {
        return $this->gender;
    }

    public function getUsername() {
        return $this->username;
    }

    public function getPw() {
        return $this->pw;
    }

    public function getPhone() {
        return $this->phone;
    }

    public function getStreetAddress() {
        return $this->street_address;
    }

    public function getUnit() {
        return $this->unit;
    }

    public function getPostalCode() {
        return $this->postal_code;
    }

    public function getShopName() {
        return $this->shopname;
    }

    //To implement setter methods


}






?>