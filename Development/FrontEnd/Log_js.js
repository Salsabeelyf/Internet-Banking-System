function validateLogin()
{
var clientname = document.getElementById("UName").value
var pass = document.getElementById("Password").value
<<<<<<< HEAD

=======
>>>>>>> fe104a3f39b1253e24c4aa83dd90af21a27c1ef9
var NID = document.getElementById("NationalID").value
var UserError = document.getElementById("usererror")
var PassError = document.getElementById("passerror");
 var NIDError = document.getElementById("Niderror");

		/* ______________________________________UserName___________________________________________________*/
    if (clientname== "")  {

	 UserError.innerHTML="This Field is mandatory" ;
	//alert("You have entered an invalid format of data , Please try again") ; 
	return false; 
	}
	 
	 else if (clientname.length > 32)  
		{
			 UserError.innerHTML="The length must between 3 and 32" ;
			//alert("You have entered an invalid format of data , Please try again") ; 
			return false;
		}

	 else if (clientname.length <3) 
		{
				UserError.innerHTML="The length must between 3 and 32";
				//alert("You have entered an invalid format of data , Please try again") ;
				return false;
		}
	
	
	 else if (/[^a-zA-Z0-9\-\/]/.test(clientname))   
	{
		UserError.innerHTML="Invalid Data" ;
		//alert("You have entered an invalid format of data , Please try again") ;
		return false;

	}
	else if (isNaN(clientname)  == false )
	{
			UserError.innerHTML="Invalid Data" ;
		//alert("You have entered an invalid format of data , Please try again") ;
		return false;
	}
		/* ______________________________________Password ___________________________________________________*/
	else if (pass == "" )    
		{
		      UserError.innerHTML=" " ;
			  PassError.innerHTML="This Field is mandatory" ;
			//alert("You have entered an invalid format of data , Please try again") ; 
			return false;
		}
	else if  (pass.length >12 ) 
		{
			 UserError.innerHTML=" " ;
			  PassError.innerHTML="The length must between 8 and 12" ;
			//alert("You have entered an invalid format of data , Please try again") ; 
			return false;
			}
	else if  (pass.length < 8 )  
	{
			 UserError.innerHTML=" " ;
			  PassError.innerHTML="The length must between 8 and 12" ;
		alert("You have entered an invalid format of data , Please try again") ; 
		return false; 
	}
	
	else if  (/[^a-zA-Z0-9\-\/]/.test(pass) ==false)  
	{
			 UserError.innerHTML=" " ;
			  PassError.innerHTML="Invalid Data" ;
		//alert("8You have entered an invalid format of data , Please try again") ; 
		return false; 
		}
	 
/* ______________________________________National ID___________________________________________________*/		
		
		else if (NID == "" )   
		{  
	     UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		NIDError.innerHTML="This Field is Mandatory";
			//alert("You have entered an invalid format of data , Please try again"); 
			return false;
			}
	else if (isNaN(NID) )  
		{
	    UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		NIDError.innerHTML="Invalid Data";
		//alert("You have entered an invalid format of data , Please try again") ;
		return false; 
		}
	else if (NID.length != 14 )     
		{
		 UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		NIDError.innerHTML="The length must be 14" ;
		//alert("You have entered an invalid format of data , Please try again") ; 
		return false;
		}
	else { 
	return true;}
}

	