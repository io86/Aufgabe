//Validation of the form
function validateForm()  {
	
    
    var mail = document.getElementById('mail').value,
        vorname = document.getElementById('vorname').value,
	    nachname = document.getElementById('nachname').value,
        strasse = document.getElementById('strasse').value,
        nummer = document.getElementById('nummer').value,
        stadt = document.getElementById('stadt').value,
        postleitzahl = document.getElementById('postleitzahl').value;
    
    //Validate if all fields are filled
	if ((mail == null || mail == "") || (vorname == null || vorname == "") || ( nachname == null || nachname == "") || (strasse == null || strasse == "") || (nummer == null || nummer == "") || (stadt == null || stadt == "") || (postleitzahl == null || postleitzahl == "") )  {
		alert("Please fill all the fields");
	    return false;
	}
    
    
    //Validate if the Text field contain only letters and space and if the Number fields contains only numbers
	var letters = /[a-zA-Z\s]+/,
        numbers = /[0-9]/;
    
	if (!letters.test(vorname) || !letters.test(nachname) || !letters.test(strasse) || !letters.test(stadt) || !numbers.test(nummer) || !numbers.test(postleitzahl))  {
		alert("Please fill all the fields with the correct type");
		return false;
	}
    
    

    //Validate if the e-mail is valid
	var mailCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (mailCharacters.test(mail))  {
		return true;
	} else {
	    alert("You have entered an invalid email address!")
		return false;
	}
    
    
}