//JavaScript function that enables or disables a submit button depending
//on whether a checkbox has been ticked or not.
function terms_changed(termsCheckBox){
    //If the checkbox has been checked
    if(termsCheckBox.checked){
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("submit_button").disabled = false;
    } else{
        //Otherwise, disable the submit button.
        document.getElementById("submit_button").disabled = true;
    }
}



// list
function validate()
{
   if(document.getElementById("AGENCY_NAME").value == "")
   {
      alert("Please select value"); // prompt user
      document.getElementById("AGENCY_NAME").focus(); //set focus back to control
      return false;
   }
}