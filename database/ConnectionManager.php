<?php

class ConnectionManager {
    
        // private $host = 'localhost';
        // private $dbname = 'is216_proj';
        // private $username = 'root';
        // private $password = ''; // MAMP "root"; WAMP empty string
        // private $port = 3306; // Check in PHPMyAdmin for port number
        // private $url = "mysql:host=$host; dbname=$dbname;port=$port";
        // public $conn;

        //get database connection
        // public function getConnection() {
        //     $host = 'localhost';
        //     $dbname = 'is216_proj';
        //     $username = 'root';
        //     $password = ''; // MAMP "root"; WAMP empty string
        //     $port = 3306; // Check in PHPMyAdmin for port number
        //     // $url = "mysql:host=$host; dbname=$dbname;port=$port";

        //     $conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);
        //     $conn = setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //     return $conn;
        // }
    public function getConnection() {
        $dsn = "mysql:host=localhost;dbname=is216;port=3306";
        $pdo = new PDO($dsn, "root", "");
        return $pdo;
    }
    
}




?>