function Information()
{
 //from Database
	  var UserName= "Alaa Gamal ";
	    document.getElementById("username").innerHTML= UserName ;
}


function validateForm()
{
	 //from Database
	var typeofaccount = "current";
	var balance = 1044;
	
	var amount = document.getElementById("amountTransfer").value;
    var AccountID  = document.getElementById("Account_id").value;


	/*___________________________________Amount__________________________________*/ 
	 if (amount == "" )    		
		 {
			 alert("1you don't have the required amount , please check your balance"); 
			 return false;  
		}
		
	 else if (isNaN(amount) )    		
		 {
			 alert("2you don't have the required amount , please check your balance") ; 
			 return false;
		}
		
	 else if (amount < 50 )          
		 {
			 alert("3Min amount is 50LE , please check your balance") ; 
			 return false; 
		}
		
	 else if ( ( typeofaccount == "saving") && (amount > 100000 ) )
	 {
		 
		alert("You have exceeded the amount of money allowed to be transfer") ; 
		return false; 
	 }
	 else if ( ( typeofaccount == "current") & (amount > 10000 )  )
	 {
		 
		alert("You have exceeded the amount of money allowed to be transfer") ; 
		return false; 
	 }
	 
	else if (amount > balance)
	 {
		 alert("You don't have the required amount , please check your balance") ; 
		return false; 
	 }

	 	/*___________________________________Account__________________________________*/ 
		
	 	 else if (AccountID == "" )    		
		 {
			 alert("You have entered an invalid account , please try again"); 
			 return false;  
		}
			 else if (isNaN(AccountID) )    		
		 {
			 alert("You have entered an invalid account , please try again") ; 
			 return false;
		}
		
		else if(AccountID.length !=14)
		{
			alert("You have entered an invalid account , please try again") ; 
			 return false;
		}
		
		else
		{
			return true;
		}
		
}



		
		
		
		
		