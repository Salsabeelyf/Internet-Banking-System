var Duration_M_W_Y  = {};  //carsAndModels
Duration_M_W_Y['MO'] = ['1', '2', '3','4','5','6','7','8','9','10','11','12'];
Duration_M_W_Y['WE'] = ['1', '2', '3', '4'];
Duration_M_W_Y['YE'] = ['1', '2', '3' ,'4','5'];



function ChangeList() {
  var List_M_W_Y = document.getElementById("DM");
  var List_N = document.getElementById("DN");
  var Duration = List_M_W_Y.options[List_M_W_Y.selectedIndex].value;
  while (List_N.options.length) {
    List_N.remove(0);
  }
  var k = Duration_M_W_Y[Duration];
  if (k) {
    var i;
    for (i = 0; i < k.length; i++) {
      var newl = new Option(k[i], i);
      List_N.options.add(newl);
    }
  }
} 

function validateForm()
{
	//return from database
	var Num_Previous_Transaction = 1 ; //Dummy Data
	
	var M_W_Y = document.getElementById("DM").value;
	
	if(M_W_Y =="")
	{
		alert("No valid transactions in this period");
		return false;
	}
	else if ( Num_Previous_Transaction ==0   )
	{
	    alert("No valid transactions in this period");
		return false;
	}
	else
	{
		return true;
	}
}