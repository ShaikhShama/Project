function validate()
{
	var text = document.getElementById("email").value;
	var mailformat = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,20})?$/;
	if(mailformat.match(text))
	{
		alert(“Subscribed successfully”);
		return true;
	}
	else{
		alert("Invalid Email");
		return false;
	}
}
