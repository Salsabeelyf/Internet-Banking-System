	/* ____________________________________Function for remove account ______________________*/
    function removerows (tablebody) {
      var rows = tablebody.getElementsByTagName("tr");
      while (rows.length)
        rows[0].parentNode.removeChild(rows[0]);
    }

	/* ____________________________________Function for add account ______________________*/
    function addrows (tablebody, n) {
      for (var i=0; i<n; i++) {
        var row = document.createElement("tr");

		/*  _________Account hyperlink___________________________*/
		var titlecell3 = document.createElement("td");
		  var x = document.createElement("A");
         var t = document.createTextNode("1022234567");
		 x.id="A_id";
         x.setAttribute("href", "Account.html");
         x.appendChild(t);
      	titlecell3.appendChild(x);
        row.appendChild(titlecell3);
        tablebody.appendChild(row);
		
		/*  _________Show details button___________________________*/
		  var titlecell = document.createElement("td");
		 var input = document.createElement("input");
		input.type = "button";
		input.className="btn btn-primary  btn-lg";
		input.value="Show Details";
		input.id="View_id"   ;		
		 input.setAttribute("onclick", "f1()");
		titlecell.appendChild(input);
        row.appendChild(titlecell);
        tablebody.appendChild(row);	
				
	/*  _________Show previous transaction button___________________________*/
		 var titlecell2 = document.createElement("td");
		 var input2 = document.createElement("input");
		input2.type = "button";
		input2.className="btn btn-primary  btn-lg";
		input2.value="Show Previous Transaction";
		 input2.id="Previous_id"  ;		
		 input2.setAttribute("onclick", "f2()");		
		titlecell2.appendChild(input2);
        row.appendChild(titlecell2);
        tablebody.appendChild(row);	
			
      }
    }
	

    function myfunction(n)
	 { 
      var tablebody = document.getElementById("maintablebody");
      removerows(tablebody);
      addrows(tablebody, n);
    }
	
	
	function f1()
	{
		console.log("f1");
		
	}
	
	function f2()
	{
			console.log("f2");
	}

