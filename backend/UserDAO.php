<?php
require_once "common.php";

class UserDAO {

    function add($user) {
        $conn = new ConnectionManager();
        $pdo = $conn->getConnection();
        $sql = 'insert into user (email, fname, lname, gender, username, pw, phone, street_address, unit, postal_code, shopname)
                    values (:email, :fname, :lname, :gender, :username, :pw, :phone, :street_address, :unit, :postal_code, :shopname)';

        $stmt = $pdo->prepare($sql);
        $email = $user->getEmail();
        $fname = $user->getFName();
        $lname = $user->getLName();
        $gender = $user->getGender();
        $username = $user->getUsername();
        $pw = $user->getPw();
        $phone = $user->getPhone();
        $street_address = $user->getStreetAddress();
        $postal_code = $user->getPostalCode();
        $shopname = $user->getShopName();
        
        $stmt->bindParam(':email',$email,PDO::PARAM_STR);
        $stmt->bindParam(':fname',$fname,PDO::PARAM_STR);
        $stmt->bindParam(':lname',$lname,PDO::PARAM_STR);
        $stmt->bindParam(':gender',$gender,PDO::PARAM_STR);
        $stmt->bindParam(':username',$username,PDO::PARAM_STR);
        $stmt->bindParam(':pw',$pw,PDO::PARAM_STR);
        $stmt->bindParam(':phone',$phone,PDO::PARAM_STR);
        $stmt->bindParam(':street_address',$street_address,PDO::PARAM_STR);
        $stmt->bindParam(':postal_code',$postal_code,PDO::PARAM_STR);
        $stmt->bindParam(':shopname',$shopname,PDO::PARAM_STR);

        $isAddOK = $stmt->execute();
        $stmt->closeCursor();
        $pdo = null;
        return $isAddOK;
    }
}


?>