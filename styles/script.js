function openNav() {
    'use strict'
    document.getElementById("nav").style.visibility = "visible";
    document.getElementById("navbtn").style.visibility = "hidden";
}

function closeNav() {
    'use strict'
    document.getElementById("nav").style.visibility = "hidden";
    document.getElementById("navbtn").style.visibility = "visible";
}

function myFunction() {
    'use strict'
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}