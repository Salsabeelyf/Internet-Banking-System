<?php
include('Client.php');
include 'data.json';

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

    $r = userExist($conn,$national_ID);
    echo $r;
	//exit();
}
else if ($_POST["sender"]=="Verification")
{
	register($conn);
	
}

else if ($_POST["sender"]=="Login")
{
	$national_ID = $_POST['NID'];
    $name = $_POST['name'];
    $password = $_POST['password'];
	Login($conn,$national_ID,$password,$name);

}

else if ($_POST["sender"]=="accountdetails")
{
	$account_ID = $_POST['account_ID'];
	$balance = checkBalance($conn,$account_ID);
	echo $balance;
}

function register($conn){

	$file = file_get_contents('data.json');
	$account = json_decode($file);
    $sql = "INSERT INTO client (national_ID, client_name, client_email, password, client_mobile_no) VALUES ('".$account->national_ID."','".$account->name."','".$account->email."', '".$account->password."', '".$account->phone."')";
	$conn->query($sql); 
exit();	
}

function userExist($conn1,$id){
    $sql = "SELECT * FROM `client` WHERE `national_ID`=".$id;
    $result = mysqli_query($conn1, $sql);
    $result = $result->num_rows; 
	 if($result>0){
        $msg = 'Already Exist';
	 }else{
		$msg = 'new' ;
		    /*
		
	// Account details
	$apiKey = urlencode('UGnlML7AkCo-bR28vCVZhnMzo094GIO3GhfiCVqU4q');
	
	// Message details
	$numbers = array('2'.$phone);
	$sender = urlencode('IBS');
	$message = rawurlencode('Your code is 951753');
 
	$numbers = implode(',', $numbers);
 
	// Prepare data for POST request
	$data = array('apikey' => $apiKey, 'numbers' => $numbers, "sender" => $sender, "message" => $message);
 
	// Send the POST request with cURL
	$ch = curl_init('https://api.txtlocal.com/send/');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);
	*/
	 }
	 return $msg;
}

function Login($conn1,$id,$password,$name){
	$sql = "SELECT * FROM client WHERE national_ID= '".$id."' and password= '".$password."' and client_name= '".$name."'";
    $result = mysqli_query($conn1, $sql);
	$row = mysqli_fetch_array($result);
	if($row['national_ID'] == $id && $row['password'] == $password )
	{
		echo "Login successful! Welcome ".$row['client_name'];
	}
	else
	{
		echo "Login failed ";
	}
}

function checkBalance($conn,$acc_id){
	$type = 0;
	$balan = 1;
    $sql = "SELECT * FROM `account` WHERE account_ID ='".$acc_id."'";
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        printf("Error: %s\n", mysqli_error($conn));
    }else{
    if ($result->num_rows > 0){
        $row = mysqli_fetch_array($result);
		
            $balance[$type]= $row['account_type'];
			$balance[$balan]= $row['account_balance'];
			
		    $balance = implode( ", ", $balance );
			//echo $balance[1];
    }else{
        return [0];
    }
    }
    return $balance;
}

?>
