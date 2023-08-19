function addValue(event) {
   event.preventDefault();
   let d = document.getElementById("fullName").value;
   let fullname = d.slice(0,1) + ' ' + d.substr(d.indexOf(' ')+1,1) +  ' ' +  d.substr(d.lastIndexOf(' ') + 1,1)
   console.log(fullname);
   display(fullname);
}


function display(value) {
   let newname = value;
   document.getElementById("display").innerHTML = newname;
}

  