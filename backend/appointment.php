<?php
#hi

class Appointment {
    public $user_email;
    public $seller_email;
    public $schedule_id;
    public $shop_name;
    public $image_url;
    public $service_title;
    public $service_description;
    public $service_price;
    public $appt_date_time;
    
    

    //construct User object
    function __construct($user_email,$seller_email,$schedule_id,$shop_name,$image_url,$service_title,$service_description,$service_price,$appt_date_time) {
        $this->user_email = $user_email;
        $this->seller_email = $seller_email;
        $this->schedule_id = $schedule_id;
        $this->shop_name = $shop_name;
        $this->image_url = $image_url;
        $this->service_title = $service_title;
        $this->service_description = $service_description;
        $this->service_price = $service_price;
        $this->appt_date_time = $appt_date_time;
        
    }

    // getter methods
    public function getUserEmail() {
        return $this->user_email;
    }
    public function getSellerEmail() {
        return $this->seller_email;
    }

    public function getScheduleID() {
        return $this->schedule_id;
    }

    public function getShopName() {
        return $this->shop_name;
    }

    public function getImageURL() {
        return $this->image_url;
    }

    public function getServiceTitle() {
        return $this->service_title;
    }

    public function getServiceDescription() {
        return $this->service_description;
    }

    public function getServicePrice() {
        return $this->service_price;
    }

    public function getApptDateTime() {
        return $this->appt_date_time;
    }

    

    //To implement setter methods


}
