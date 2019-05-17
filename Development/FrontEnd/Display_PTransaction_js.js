 function myfunction( )
	   {
		   //Data Base
			  var UserName= "alaa Gamal";
	 document.getElementById("username").innerHTML=UserName;
			   
			   
			var getDisplayed= document.getElementById("optradio").value
     //Data Base
			  var  Transaction =[  {amount:12345, From:1111 , to: 2222} , {amount:67890, From: 3333 , to: 4444} , {amount:78787, From: 5555 , to: 6666} 
			   ,{amount:12345, From:1111 , to: 2222} , {amount:67890, From: 3333 , to: 4444} , {amount:78787, From: 5555 , to: 6666} ] ;
			  var numbers= Transaction.length ;
			   
			   if(numbers < getDisplayed )
			   {
					change(numbers, Transaction);
			   }
			   
			   else 
			   {
			   
				    var num= numbers ;
					while( num /  getDisplayed !=0)
					{
						change(getDisplayed, Transaction);
						num = num -  getDisplayed;
					}
					if(num>0)
					{
					change(num, Transaction);
					}
					
					
			   }
		 }
			   
		function change(n,Transaction)
	   {
	   
	   var tablebody = document.getElementById("maintablebody");
      removerows(tablebody);
      addrows(tablebody, n,Transaction);
	   }

         function removerows (tablebody)
		 {
      var rows = tablebody.getElementsByTagName("tr");
      while (rows.length)
        rows[0].parentNode.removeChild(rows[0]);
		}	

  function addrows (tablebody, n , Transaction) 
  {
      for (var i=0; i<n; i++) 
	  {	
	         var row = document.createElement("tr");
	        var titlecell= document.createElement("td");
	        var money = document.createElement("h5");
			money.innerHTML = Transaction[i].amount;
			titlecell.appendChild(money);
			row.appendChild(titlecell);
			tablebody.appendChild(row); 

      var titlecell2= document.createElement("td");
	   var Fromm = document.createElement("h5");
	   Fromm.innerHTML = Transaction[i].From;
	   titlecell2.appendChild(Fromm);
	    row.appendChild(titlecell2);
		 tablebody.appendChild(row); 
		 
		 
		 	   var titlecell3= document.createElement("td");
	   var Too = document.createElement("h5");
	   Too.innerHTML = Transaction[i].to; 
	   titlecell3.appendChild(Too);
	    row.appendChild(titlecell3);
		 tablebody.appendChild(row); 			
	}	  
			   
			   
}	   
	