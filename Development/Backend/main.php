<?php
include('Client.php');
include 'data.txt';

$host = "localhost";
$dbusername = "root";
$dbpass = "";
$dbname = "internet_banking_system";


$conn = new mysqli($host, $dbusername, $dbpass ,$dbname);

if (mysqli_connect_error())
 {
    die ("Connect Error(".mysqli_connect_errno().")".mysqli_connect_error());
 }
 
	
if($_POST["sender"]=="Registration"){
    $national_ID = $_POST['NID'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['mobile'];
	$staff_ID = $_POST['SID'];
	
	$data  = new stdClass();
	$data->national_ID  = $national_ID;
	$data->name  = $name;
	$data->email = $email;
	$data->password= $password;
	$data->phone= $phone;
	$data->staff_ID= $staff_ID;
	$text = json_encode ($data);

	file_put_contents('data.json', $text);

    $re = userRegistered($conn,$national_ID);    
    if($re>0){
        echo 'Already';
    }else{
        //register($conn);
		/*
		  if ($this->con->affected_rows>=1)
		  {
			  echo 'Success';
		  }
		  else 
		  {
			  echo 'Failed';
			  
		  }

    */
    //$re = userRegistered($conn,$national_ID);
    
    //$reg = register($conn);
    
    //echo '{"registered": '.$reg.' }';
}
}
else if ($_POST["sender"]=="Verification")
{

	register($conn);
	
}

function register($conn){

	$file = file_get_contents('data.json');
	$account = json_decode($file);
    //$sql = "INSERT INTO client (national_ID, client_name, client_email, password, client_mobile_no) VALUES ('".$national_ID."','".$name."','".$email."', '".$password."', '".$phone."')";
    $sql = "INSERT INTO client (national_ID, client_name, client_email, password, client_mobile_no) VALUES ('".$account->national_ID."','".$account->name."','".$account->email."', '".$account->password."', '".$account->phone."')";
  
        //mysqli_query($conn, $sql);
		//mysqli_query($conn, $sql); 
 
	$conn->query($sql);
 
 

	   
}

function userRegistered($conn1,$id){
    $sql = "SELECT * FROM `client` WHERE `national_ID`=".$id;
    $result = mysqli_query($conn1, $sql);
    return $result->num_rows; 
}

?>
