
function validateForm()
{

	var clientname = document.getElementById("UName").value
	var mail = document.getElementById("Email").value
	var pass = document.getElementById("Password").value
	var confpass= document.getElementById("ConfirmPassword").value
	var Mphone = document.getElementById("PhoneNumber").value
	var SID = document.getElementById("Staff").value
	var NID = document.getElementById("NationalID").value
	var  checkstaffID = document.getElementById("sid").checked
	var UserError = document.getElementById("usererror")
	var PassError = document.getElementById("passerror");
	var ConfError = document.getElementById("conferror");
   var NIDError = document.getElementById("Niderror");
    var MobError = document.getElementById("Moberror");
	 var StaffError = document.getElementById("Stafferror");
   var EmailError = document.getElementById("mailerror");

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
	 
	/* ______________________________________confirm Password ___________________________________________________*/	
	else if (confpass == "" )     
	{
		 UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML="This Field is mandatory" ;
		//alert("You have entered an invalid format of data , Please try again") ; 
		return false; 
		}
	else if (confpass != pass )     {
		UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML="Invalid Data" ;
		//alert("You have entered an invalid format of data , Please try again"); 
		return false; 
		}
	else if  (confpass.length >12 ) 
		{UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML="The length must between 8 and 12"  ;
		//alert("You have entered an invalid format of data , Please try again"); 
		return false; 
		}
	else if  (confpass.length < 8 )  {
	   UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML="The length must between 8 and 12" ;
		//alert("You have entered an invalid format of data , Please try again"); 
		return false; 
		}
		/* ______________________________________National ID___________________________________________________*/		
		
		else if (NID == "" )   
		{  
	     UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML="This Field is Mandatory";
			//alert("You have entered an invalid format of data , Please try again"); 
			return false;
			}
	else if (isNaN(NID) )  
		{
			     UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML="Invalid Data";
		//alert("You have entered an invalid format of data , Please try again") ;
		return false; 
		}
	else if (NID.length != 14 )     
		{
		 UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML="The length must be 14" ;
		//alert("You have entered an invalid format of data , Please try again") ; 
		return false;
		}
		   /* ______________________________________Email___________________________________________________*/	
 
       else if (mail == ""){
            	UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
		MobError.innerHTML=" "; 
		StaffError.innerHTML=" ";
		EmailError.innerHTML="This Field is Mandatory";
            return false;
        }
  
        else if (mail.indexOf("@", 0) < 0)                 
        { 
            	UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
		MobError.innerHTML=" "; 
		StaffError.innerHTML=" ";
				EmailError.innerHTML="Invalid Data";
            return false; 
        } 
   
       else  if (mail.value.indexOf(".", 0) < 0)                 
        { 
          UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
		MobError.innerHTML=" "; 
		StaffError.innerHTML=" ";
		EmailError.innerHTML="Invalid Data";
		return false;
		}
			/* ______________________________________Mobile phone___________________________________________________*/		
		
	else if (Mphone == "" )    
		{
			
	   UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
		MobError.innerHTML="This Field is Mandatory";
			//alert("You have entered an invalid format of data , Please try again") ;
			return false;
	   }
	else if (isNaN(Mphone) )    {
			   UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
		MobError.innerHTML="Invalid Data"; 
		//alert("You have entered an invalid format of data , Please try again");
		return false;  }
	else if (Mphone.length > 20 )      {
			   UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
		MobError.innerHTML="The length must bet less than 20" ; 
		//alert("You have entered an invalid format of data , Please try again");
		return false;  }
		
 /* ______________________________________Staff id___________________________________________________*/	
	else if( checkstaffID  ==true)
	{
		 if (SID == "" )    		    {
		 UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
				MobError.innerHTML=" "; 
			StaffError.innerHTML="This Field is Mandatory";
			// alert("You have entered an invalid format of data , Please try again"); 
			 return false;  }
			 
		 else if (isNaN(SID) )    		 {
			 		 UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
				MobError.innerHTML=" "; 
			StaffError.innerHTML="Invalid Data";
			// alert("You have entered an invalid format of data , Please try again") ;

			 return false; }
		else if (SID.length != 6 )      {
		UserError.innerHTML=" " ;
		PassError.innerHTML=" ";
		ConfError.innerHTML=" " ;
		NIDError.innerHTML=" ";
		MobError.innerHTML=" "; 
		StaffError.innerHTML="The length must bet 6" ;
			//alert("You have entered an invalid format of data , Please try again") ; 
			return false; }
	}
	     

	
	
	else { 

	return true;}
	



}






