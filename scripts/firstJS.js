var myBtn = document.querySelector('button');
// var myHeading = document.querySelector('.mesg')

// sample function 
// function SetUserName (){
//     var myName = prompt('pls enter the name');
//     localStorage.setItem('name',myName);
//     myHeading.textContent = "y fucked up man" + myName;
// }

// if(!localStorage.getItem('name')){
//     SetUserName();
// }else {
//     var storedData = localStorage.getItem('name');
//     myHeading.textContent =  "y fucked up man" +" " + storedData;
// }

myBtn.onclick = function(){
   window.location.href = "/age-rating"; 
}