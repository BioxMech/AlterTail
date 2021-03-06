<?php
require_once "common.php";

class UserDAO {

    function add($user) {
        $conn = new ConnectionManager();
        $pdo = $conn->getConnection();
        $sql = 'insert into user (email, fname, SuperSaaS_user_id, gender, username, pw, phone, street_address, unit, postal_code)
                    values (:email, :fname, :SuperSaaS_user_id, :gender, :username, :pw, :phone, :street_address, :unit, :postal_code)';

        $stmt = $pdo->prepare($sql);
        $email = $user->getEmail();
        $fname = $user->getFName();
        $SuperSaaS_user_id = $user->getSuperSaaSUserId();
        $gender = $user->getGender();
        $username = $user->getUsername();
        $pw = $user->getPw();
        $hashed = password_hash($pw, PASSWORD_DEFAULT);
        $phone = $user->getPhone();
        $street_address = $user->getStreetAddress();
        $postal_code = $user->getPostalCode();
        $unit = $user->getUnit();
        // $shopname = $user->getShopName();
        
        $stmt->bindParam(':email',$email,PDO::PARAM_STR);
        $stmt->bindParam(':fname',$fname,PDO::PARAM_STR);
        $stmt->bindParam(':SuperSaaS_user_id',$SuperSaaS_user_id,PDO::PARAM_STR);
        $stmt->bindParam(':gender',$gender,PDO::PARAM_STR);
        $stmt->bindParam(':username',$username,PDO::PARAM_STR);
        $stmt->bindParam(':pw',$hashed,PDO::PARAM_STR);
        $stmt->bindParam(':phone',$phone,PDO::PARAM_STR);
        $stmt->bindParam(':street_address',$street_address,PDO::PARAM_STR);
        $stmt->bindParam(':unit',$unit,PDO::PARAM_STR);
        $stmt->bindParam(':postal_code',$postal_code,PDO::PARAM_STR);
        // $stmt->bindParam(':shopname',$shopname,PDO::PARAM_STR);

        $isAddOK = $stmt->execute();
        $stmt->closeCursor();
        $pdo = null;
        return $isAddOK;
    }

    function getHashedPassword($email) {
        $conn = new ConnectionManager();
        $pdo = $conn->getConnection();

        $sql = "SELECT * from user where email = :email";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email',$email,PDO::PARAM_STR);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute();
        if ($row = $stmt->fetch()) {
            $hashed_password = $row['pw'];
        }
        else {
            $hashed_password = FALSE;
        }

        $stmt->closeCursor();
        $pdo = null;

        return $hashed_password;
    }
}


?>