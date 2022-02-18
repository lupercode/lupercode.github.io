var navbar = document.getElementById("myNavbar");
var navBtn = document.getElementById("navButton");
var w = window.innerWidth;

if ( w >= 992) {
	document.getElementsByClassName('nav-link').href = "#!";
//	document.getElementsByClassName('nav-link')[1].href = "#!";
//	document.getElementsByClassName('nav-link')[2].href = "#!";
//	document.getElementsByClassName('nav-link')[3].href = "#!";
}

window.onscroll = function() {myFunction()};
function myFunction() {
	var tf = navBtn.classList.contains("collapsed");

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.className = " navbar" + " navbar-expand-lg" + " navbar-light" + " bg-white" + " fixed-top";
    } else if (tf == true){
		navbar.className = " navbar" + " navbar-expand-lg" + " navbar-dark" + " bg-transparent" + " fixed-top" + " py-4" + " no-bs";
    }
}

function myFunction2() {
	var tf = navBtn.classList.contains("collapsed");

	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
	} else if (tf === true) {
    	    navbar.className = " navbar" + " navbar-expand-lg" + " navbar-dark" + " bg-transparent" + " fixed-top" + " py-4" + " no-bs";
		} else {
    	    navbar.className = " navbar" + " navbar-expand-lg" + " navbar-light" + " bg-white" + " fixed-top";
		}
}

function scrollWin(id) {
	myFunction(); //optional

	var x = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset;
  /*window.scrollTo(0, x - 60);*/
  window.scrollTo({
	  top: x - 60,
	  behavior: 'smooth',
  });
}
