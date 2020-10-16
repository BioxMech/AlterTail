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
        public function getConnection() {
            $host = 'localhost';
            $dbname = 'is216_proj';
            $username = 'root';
            $password = ''; // MAMP "root"; WAMP empty string
            $port = 3306; // Check in PHPMyAdmin for port number
            $url = "mysql:host=$host; dbname=$dbname;port=$port";

            $pdoObject = new PDO($url, $username,$password);

            $pdoObject->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $pdoObject;
        }
    
}




?>