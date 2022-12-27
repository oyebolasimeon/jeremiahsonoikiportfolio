function addAnimation(i){
    // alert("hellow")
    let item = document.getElementById(i);
    if(item.className != ""){
        item.className = ""
    } else {
        item.className = "animate__animated animate__heartBeat"
    }
    // item.className = "animate__animated animate__heartBeat"
    // item.classList.add('animate__animated animate__backInRight');
   }

   const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Carousel

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}