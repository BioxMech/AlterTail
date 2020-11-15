<?php
require_once "common.php";

class AppointmentDAO {

    function add($appointment) {
        $conn = new ConnectionManager();
        $pdo = $conn->getConnection();
        $sql = 'insert into appointments (user_email,seller_email,schedule_id,shop_name,image_url,service_id,service_title,service_description,service_price,appt_date_time)
                    values (:user_email,:seller_email,:schedule_id,:shop_name,:image_url,:service_id,:service_title,:service_description,:service_price,:appt_date_time)';

        $stmt = $pdo->prepare($sql);

        $user_email = $appointment->getUserEmail();
        $seller_email = $appointment->getSellerEmail();
        $schedule_id = $appointment->getScheduleID();
        $shop_name = $appointment->getShopName();
        $image_url = $appointment->getImageURL();
        $service_id = $appointment->getServiceID();
        $service_title = $appointment->getServiceTitle();
        $service_description = $appointment->getServiceDescription();
        $service_price = $appointment->getServicePrice();
        $appt_date_time = $appointment->getApptDateTime();
        
        $stmt->bindParam(':user_email',$user_email,PDO::PARAM_STR);
        $stmt->bindParam(':seller_email',$seller_email,PDO::PARAM_STR);
        $stmt->bindParam(':schedule_id',$schedule_id,PDO::PARAM_STR);
        $stmt->bindParam(':shop_name',$shop_name,PDO::PARAM_STR);
        $stmt->bindParam(':image_url',$image_url,PDO::PARAM_STR);
        $stmt->bindParam(':service_id',$service_id,PDO::PARAM_STR);
        $stmt->bindParam(':service_title',$service_title,PDO::PARAM_STR);
        $stmt->bindParam(':service_description',$service_description,PDO::PARAM_STR);
        $stmt->bindParam(':service_price',$service_price,PDO::PARAM_STR);
        $stmt->bindParam(':appt_date_time',$appt_date_time,PDO::PARAM_STR);


        $isAddOK = $stmt->execute();
        $stmt->closeCursor();
        $pdo = null;
        return $isAddOK;
    }

    function delete($email, $shop_name) {
        
        $conn = new ConnectionManager();
        $pdo = $conn->getConnection();
        
        $sql = 'DELETE FROM appointments WHERE user_email = :email AND shop_name = :shop_name';

        $stmt = $pdo->prepare($sql);

        $stmt->bindParam(':email',$email,PDO::PARAM_STR);
        $stmt->bindParam(':shop_name',$shop_name,PDO::PARAM_STR);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $isAddOK = $stmt->execute();
        $stmt->closeCursor();
        $pdo = null;
        return $isAddOK;
    }
}


?>