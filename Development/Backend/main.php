<?php
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
 
if(isset($_POST["sender"])){
    if($_POST["sender"]=="Registration"){
    $national_ID = $_POST['NID'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['mobile'];
	
	saveTojsonFile($national_ID, $name, $email, $password, $phone);
        
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
        $account = getAccountDetails($conn,$account_ID);
        echo $account;
    }

    else if($_POST["sender"]=="showDetails"){
        $client_ID = $_POST['client_ID'];
        $account_ID = $_POST['account_ID'];
        saveAccountData($client_ID,$account_ID);
    }

}else{
    if ($_GET["sender"]=="accountGetter"){
        $Cid = $_GET["client_ID"];
        $accounts = getAccountIDs($conn,$Cid);
        //echo sizeof($accounts);
        echo implode(",", $accounts);
        exit();
    }
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
		    
        $file = file_get_contents('data.json');
        $client = json_decode($file);
        $phone = $client->phone;
		
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
	
	 }
	 return $msg;
}

function Login($conn1,$id,$password,$name){
	$sql = "SELECT * FROM client WHERE national_ID= '".$id."' and password= '".$password."' and client_name= '".$name."'";
    $result = mysqli_query($conn1, $sql);
	$row = mysqli_fetch_array($result);
    
    $national_ID = $row['national_ID'];
    $uname = $row['client_name'];
    $pass = $row['password'];
    $email = $row['client_email'];
    $phone = $row['client_mobile_no'];
    
	if($national_ID == $id && $pass == $password )
	{
		while(!saveTojsonFile($national_ID, $uname, $email, $pass, $phone)){}
        echo "Login successful! Welcome ".$row['client_name'];
        
	}
	else
	{
		echo "Login failed ";
	}
}


function getAccountIDs($conn, $national_ID){
    $count = 0;
    $sql = "SELECT * FROM `account` WHERE client_ID = ".$national_ID;
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        printf("Error: %s\n", mysqli_error($conn));
    }else{
    if ($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $accounts[$count] = $row['account_ID'];
            $count =  $count + 1;
        }
        //echo $row['account_ID'];
    }else{
        //echo "0 results";
        return [0];
    }
    }
    return $accounts;
}


function getAccountDetails($conn,$acc_id){
	$type = 0;
	$balan = 1;
    $sql = "SELECT * FROM `account` WHERE account_ID ='".$acc_id."'";
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        printf("Error: %s\n", mysqli_error($conn));
    }else{
    if ($result->num_rows > 0){
        $row = mysqli_fetch_array($result);
		
            $account[$type]= $row['account_type'];
			$account[$balan]= $row['account_balance'];
			
		    $account = implode( ", ", $account );
			//echo $balance[1];
    }else{
        return [0];
    }
    }
    return $account;
}

function saveAccountData($clientId,$accountId){
    $data  = new stdClass();
	$data->client_ID  = $clientId;
	$data->account_ID  = $accountId;
    
	$text = json_encode ($data);

    file_put_contents('showAccount.json', $text);

}

function saveTojsonFile($id,$uname,$mail,$pass,$ph){
    $data  = new stdClass();
	$data->national_ID  = $id;
	$data->name  = $uname;
	$data->email = $mail;
	$data->password= $pass;
	$data->phone= $ph;
	$text = json_encode ($data);

	file_put_contents('data.json', $text);

	return true;

}
?>
