let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();

document.getElementById("Day").innerHTML="Current Day: "+day;
document.getElementById("Month").innerHTML="Current Month: "+month;
document.getElementById("Year").innerHTML="Current Year: "+year;
document.getElementById("cDate").innerHTML="Current Complete Date: "+day+"/"+month+"/"+year;


