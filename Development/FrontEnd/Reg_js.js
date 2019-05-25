
function validateRegistrationForm()
{

	var clientname = document.getElementById("UName").value
	var mail = document.getElementById("Email").value
	var pass = document.getElementById("Password").value
	var confpass= document.getElementById("ConfirmPassword").value
	var Mphone = document.getElementById("PhoneNumber").value
	var SID = document.getElementById("Staff").value
	var NID = document.getElementById("NationalID").value
	var  checkstaffID = document.getElementById("sid").checked

    if (clientname== "")  { alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if (clientname.length > 32)   {alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if (clientname.length <3)   {alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if (/[^a-zA-Z0-9\-\/]/.test(clientname))   {alert("You have entered an invalid format of data , Please try again") ; return false;  }
	
	
	else if (pass == "" )     {alert("You have entered an invalid format of data , Please try again") ; return false;  }
	else if  (pass.length >12 )  {alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if  (pass.length < 8 )  {alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if  (/[^a-zA-Z0-9\-\/]/.test(pass) ==false)  {alert("8You have entered an invalid format of data , Please try again") ; return false; }
	 
	
	else if (confpass == "" )     {alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if (confpass != pass )     {alert("You have entered an invalid format of data , Please try again"); return false;  }
	else if  (confpass.length >12 )  {alert("You have entered an invalid format of data , Please try again"); return false;  }
	else if  (confpass.length < 8 )  {alert("You have entered an invalid format of data , Please try again"); return false;  }
	
	else if (Mphone == "" )     {alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if (isNaN(Mphone) )    		 {alert("You have entered an invalid format of data , Please try again"); return false;  }
	else if (Mphone.length > 20 )      {alert("You have entered an invalid format of data , Please try again") ; return false; }

	else if( checkstaffID  ==true)
	{
		 if (SID == "" )    		    {alert("You have entered an invalid format of data , Please try again"); return false;  }
		 else if (isNaN(SID) )    		 {alert("You have entered an invalid format of data , Please try again") ; return false; }
		else if (SID.length != 6 )      {alert("You have entered an invalid format of data , Please try again") ; return false; }
	}
	
	else if (NID == "" )    		 {alert("You have entered an invalid format of data , Please try again"); return false;  }
	else if (isNaN(NID) )    		 {alert("You have entered an invalid format of data , Please try again") ; return false; }
	else if (NID.length != 14 )      {alert("You have entered an invalid format of data , Please try again") ; return false; }
	
	else { 

	return true;}

}