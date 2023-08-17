 
 function display(value) {
    let show = value
    console.log(show);
    document.getElementById("display").innerHTML = show;
 }

 function addValue(event) {
    event.preventDefault();
    firstName = document.getElementById("firstName").value
    middleName = document.getElementById("middleName").value
    lastName = document.getElementById("lastName").value

    let fullName = `Your Nickname is : ${firstName.slice(0,1)}${middleName.slice(0,1)}${lastName.slice(0,1)}`;
    display(fullName);
 }