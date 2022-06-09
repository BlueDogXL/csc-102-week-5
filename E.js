function checkCreds(){
    console.log("checkCreds started!");
    // create variables for the inputs and bring in the stuff that was input
    var firstName = document.getElementById("firstName").value;
    console.log("first name: " + firstName);
    var lastName = document.getElementById("lastName").value;
    console.log("last name: " + lastName);
    var idNumber = document.getElementById("idNumber").value;
    console.log("id number: " + idNumber);
    // make a full name variable
    var fullName = firstName + " " + lastName;
    console.log("Full name: " + fullName);

    // check if it's twenty characters or less 
    var fullNameLength = fullName.length;
    console.log(fullNameLength)
    if(fullNameLength > 21 || fullNameLength < 3){
        document.getElementById("loginStatus").innerHTML = "invalid name.";
    // check if id number < 1000
    } else if(idNumber > 999 || idNumber < 1){
        document.getElementById("loginStatus").innerHTML = "invalid id number.";
    } // if everything is okay, grant access
    else {
        alert(fullName + ", you are now authorized.");
        location.replace("./E.html");
    }
}