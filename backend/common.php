<?php

    spl_autoload_register(
        function ($class) {
            require_once "/IS216/Project/AlterTail/model$class.php";
        }
    );

    require_once "/IS216/Project/AlterTail/database/ConnectionManager.php";
    session_start();



?>