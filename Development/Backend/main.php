<?php
include('Client.php');

$host = "localhost";
$dbusername = "root";
$dbpass = "";
$dbname = "internet_banking_system";

$conn = new mysqli($host, $dbusername, $dbpass ,$dbname);

if (mysqli_connect_error())
 {
    die ("Connect Error(".mysqli_connect_errno().")".mysqli_connect_error());
 }

if($_POST["sender"]=="register"){
    $national_ID = $_POST['national_ID'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];

    $re = userRegistered($conn,$national_ID);    
    if($re>0){
        echo 'Already';
    }else{
        register($conn);
        
        mysqli_close($conn);
        
        $con = new mysqli($host, $dbusername, $dbpass ,$dbname);

        if (mysqli_connect_error())
         {
            die ("Connect Error(".mysqli_connect_errno().")".mysqli_connect_error());
         }
    
        $re1 = userRegistered($con,$national_ID);    
        if ($re1>0){echo 'Successful';}
    }
    //$re = userRegistered($conn,$national_ID);
    
    //$reg = register($conn);
    
    //echo '{"registered": '.$reg.' }';
}

function register($conn){
    
    $sql = "INSERT INTO client (national_ID, client_name, client_email, password, client_mobile_no) VALUES ('".$national_ID."','".$name."', '".$email."', '".$password."', '".$phone."')";
        
    $r = mysqli_query($conn, $sql);
    return $r;
}

function userRegistered($conn1,$id){
    $sql = "SELECT * FROM `client` WHERE `national_ID`=".$id;
    $result = mysqli_query($conn1, $sql);
    return $result->num_rows; 
}

?>
