
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
  window.open("https://drive.google.com/file/d/1wyVEZ8gd6U7UYVPW2SV28kJP1_X-c5Ct/view?usp=sharing", "_blank");
};

// document.getElementById('resume-link-1').addEventListener("click", () => {
//   // console.log("OPENinig.....")
//  // window.location.assign("https://drive.google.com/file/d/1vgOhH9mlzxn8doT0WA3ZkXD8IDcvi3Ed/view?usp=drive_link", "_blank");
//   window.open(
//       (href= "https://drive.google.com/file/d/1GWcEvoHK1-wVxtWtrXBveaJj7IRm62YB/view?usp=sharing")
//   );
// })

// document.getElementById('resume-link-2').addEventListener("click", () => {
//   alert("download")
//   // console.log("OPENinig.....")
//   //window.location.assign("https://drive.google.com/file/d/1vgOhH9mlzxn8doT0WA3ZkXD8IDcvi3Ed/view?usp=drive_link", "_blank");
//   window.open(
//       (href= "https://drive.google.com/file/d/1GWcEvoHK1-wVxtWtrXBveaJj7IRm62YB/view?usp=sharing")
//   );
// })
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

