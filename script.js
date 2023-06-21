
// function myfunction(){
//     document.getElementById("mytopnav").classList.toggle("responsive");
    
// }
// //navbar sticky
// window.onscroll = function() {myFunction()};


// var mytopnav = document.getElementById("mytopnav");

// var sticky = mytopnav.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     mytopnav.classList.add("sticky")
//   } else {
//     mytopnav.classList.remove("sticky");
//   }
// }

GitHubCalendar(".calendar", "kumarprem66");
// or enable responsive functionality
GitHubCalendar(".calendar", "kumarprem66", { responsive: true });

function resume(){
  window.open("https://drive.google.com/file/d/1K6S3eQcKb6r0ZXgn8C892fVGuebKg35-/view?usp=sharing", "_blank");
};


// let header = document.querySelector("#nav-menu");
// header.classList.toggle('sticky',window.scrollY>100)


// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// remove toggle icon and navbar when click navbar link

window.onscroll = ()=>{
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

