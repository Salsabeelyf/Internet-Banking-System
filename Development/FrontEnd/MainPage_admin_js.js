 function validateForm()
			 { 
				var AccountId= document.getElementById("AccountiD").value;
				if(AccountId=="")
				{
				   alert("You have entered an invalid Account , Please try again") ;
				   return false; 
				}
				else if (isNaN(AccountId))
				 {
				   alert("You have entered an invalid Account , Please try again") ;
				   	   return false; 
				 }
				 else if (AccountId.length != 14)
				 {
				       alert("You have entered an invalid Account , Please try again") ;
				   	   return false; 
				 }
				 else
				 {
					return true;
				 }
			 
			 
			 }
			 
			 
			 function removeFunction(){
			 
			 }
			 
			 function Information()
			 {
				  var UserName= "Alaa Gamal ";
	            document.getElementById("username").innerHTML= UserName ;
		
			 }