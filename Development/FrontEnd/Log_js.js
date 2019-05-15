function validateLogin()
{
var Name = document.getElementById("UName").value
var Password = document.getElementById("Password").value
var NID = document.getElementById("NationalID").value

 if (clientname== "")  { alert("1You have entered an invalid format of data , Please try again") ; return false; }
	else if (clientname.length > 32)   {alert("2You have entered an invalid format of data , Please try again") ; return false; }
	else if (clientname.length <3)   {alert("3You have entered an invalid format of data , Please try again") ; return false; }
	else if (/[^a-zA-Z0-9\-\/]/.test(clientname))   {alert("4You have entered an invalid format of data , Please try again") ; return false;  }
	
	else if (pass == "" )     {alert("5You have entered an invalid format of data , Please try again") ; return false;  }
	else if  (pass.length >12 )  {alert("6You have entered an invalid format of data , Please try again") ; return false; }
	else if  (pass.length < 8 )  {alert("7You have entered an invalid format of data , Please try again") ; return false; }
	else if  (/[^a-zA-Z0-9\-\/]/.test(pass) ==false)  {alert("8You have entered an invalid format of data , Please try again") ; return false; }
	 
	 
	
	else if (NID == "" )    		 {alert("19You have entered an invalid format of data , Please try again"); return false;  }
	else if (isNaN(NID) )    		 {alert("20You have entered an invalid format of data , Please try again") ; return false; }
	else if (NID.length != 14 )      {alert("21You have entered an invalid format of data , Please try again") ; return false; }
	
	else { 
	return true;}
}

	