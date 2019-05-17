let clientId = "29502011207841";
let clientName = "";
let accountIds = [];
let form = $("#FORM");

    window.onload = function(){
    let Url = "main.php";
        
    // read data of logged in user
    $.get('data.json',function(client){
        //console.log(client.national_ID);
        clientId = client.national_ID;
        clientName = client.name;
        
        
        let data = {sender:"accountGetter", client_ID:clientId};
        $.get(Url,data, function(res){
            console.log(res);

            res = res.substring(res.indexOf('}')+1);
            accountIds = res.split(',');
            let n = accountIds.length;
            setUpPage(n);  
            //console.log(accountIds[0]);

        });
        
    });
        
    
          
    };

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
         var t = document.createTextNode(accountIds[i]);
		 x.id=i.toString()+"A_id";
         x.setAttribute("href", "#");
        x.setAttribute("onclick", "showAccountLink(this.id)");
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
		input.id=i+"View_id"   ;		
		 input.setAttribute("onclick", "showAccountBtn(this.id)");
		titlecell.appendChild(input);
        row.appendChild(titlecell);
        tablebody.appendChild(row);	
				
	/*  _________Show previous transaction button___________________________*/
		 var titlecell2 = document.createElement("td");
		 var input2 = document.createElement("input");
		input2.type = "button";
		input2.className="btn btn-primary  btn-lg";
		input2.value="Show Previous Transaction";
		 input2.id=i+"Previous_id"  ;		
		 input2.setAttribute("onclick", "showPT(this.id)");			
		titlecell2.appendChild(input2);
        row.appendChild(titlecell2);
        tablebody.appendChild(row);	
			
      }
    }
	

    function setUpPage(n)
	 { 
     document.getElementById("username").innerHTML=clientName;
	 var tablebody = document.getElementById("maintablebody");
      removerows(tablebody);
      addrows(tablebody, n);
    }
	
	
	function showAccountBtn(btnid)
	{
        let Url = "main.php";
        
		//console.log(btnid);
        btnid = btnid.substring(0,btnid.indexOf('V'));
        let index = parseInt(btnid);
        console.log(index);
        
        let data = {sender: "showDetails",
                    client_ID: clientId,
                    account_ID: accountIds[index]};
        
        console.log(accountIds[index]);
        //data = JSON.parse(data);
        
        $.post(Url,data).done(function(){
            form.submit();
        });
    }
       
    function showAccountLink(linkid)
	{
        let Url = "main.php";
        
		//console.log(btnid);
        linkid = linkid.substring(0,linkid.indexOf('A'));
        let index = parseInt(linkid);
        console.log(index);
        
        let data = {sender: "showDetails",
                    client_ID: clientId,
                    account_ID: accountIds[index]};
        
        console.log(accountIds[index]);
        //data = JSON.parse(data);
        
        $.post(Url,data).done(function(){
            form.submit();
        });
    }
	
	function showPT(btnid)
	{
        //console.log(btnid);
        btnid = btnid.substring(0,btnid.indexOf('P'));
        let index = parseInt(btnid);
        //console.log(index);
               
        console.log(accountIds[index]);
        
        
	}
