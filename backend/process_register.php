<?php

    require_once "common.php";

    function SuperSaaS_user_id() {
        $result = "";
        for ($i=0; $i<3; $i++) {
            $n = rand(1,9);
            $result = $result . $n;
        }
        $result = $result . "fk";

        return $result;
    }
    // $SuperSaaS_user_id = SuperSaaS_user_id();
    // $SuperSaaS_user_id = "123fk";
    

    $email = $_POST['email'];
    $username = $_POST['username'];
    $fname = $_POST['name'];
    $SuperSaaS_user_id = $_POST['SuperSaaS_user_id'];
    $gender = $_POST['gender'];
    $phone = $_POST['phone'];
    $street_address = $_POST['street_address'];
    $unit = $_POST['unit'];
    $postal_code = $_POST['postal_code'];
    $pw = $_POST['pw'];



    $user = new User($email,$fname,$SuperSaaS_user_id,$gender,$username,$pw,$phone,$street_address,$unit,$postal_code);
    $dao = new UserDAO();
    $isAddOK = $dao->add($user);

    // echo '<script src="../js/SuperSaaS.js">
    //         CreateUser('.$email.','.$fname.','.$SuperSaaS_user_id.','.$pw.')
    //         </script>';
    
    echo '<script>
        sessionStorage.setItem("SaaSID", '.$SuperSaaS_user_id.')
    </script>';
    ?>
    <!-- <!DOCTYPE html>
    <html lang="en">
    <head>
        <script src="../js/SuperSaaS.js">
            Initiate();
            CreateUser();
        </script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html> -->

    <?php
    if ($isAddOK) {
        header("Location: ../index.html");
        exit;
    }
    else {
        echo "Person is not added";
    }
?>