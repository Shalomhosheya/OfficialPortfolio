function toggleMenu() {
    const m = document.querySelector(".menu-links");
    const i = document.querySelector(".hamburger-icon");
    m.classList.toggle("open");
    i.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.typing', {
        strings: ["Software Engineer..", "Full Stack Developer..", "UI/UX Designer..", "Web Developer..","Professional Editor.."],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 600,
        loop: true
    });
});

var projects = document.getElementById("viewPro")
var project1 = document.getElementById("d1")
var closeBtn = document.getElementById("closebutton")
var assignmet = document.getElementById("viewAssignment")
var projectview = document.getElementById("projects1")


project1.addEventListener("click",function (){
  projectview.style.display="flex"
})
closeBtn.addEventListener("click",function (){
  projectview.style.display="none"
})

var pro1 = document.getElementById("pro1");
var pro2 = document.getElementById("pro2");
var pro3 = document.getElementById("pro3");
var pro4 = document.getElementById("pro4");
pro1.addEventListener("click", function() {
    window.location.href = "https://github.com/Shalomhosheya/ComputermanagementSystem";
});
pro2.addEventListener("click", function() {
    window.location.href = "https://github.com/Shalomhosheya/ComputermanagementSystem";
});
pro3.addEventListener("click", function() {
    window.location.href = "https://github.com/Shalomhosheya/ComputermanagementSystem";
});
pro4.addEventListener("click", function() {
    window.location.href = "https://github.com/Shalomhosheya/ComputermanagementSystem";
});

var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")

b1.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Assignment4Css";
})
b2.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/PortfolioHTMLframe";
})
b3.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/CSS-Assignment";
})
b4.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Assignment4Css";
})
b5.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Portfolio";
})
b6.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Assignment_6_css";
})
b7.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Pos_system";
})
b8.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Assignment_8";
})
b9.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Assignment_9";
})
b10.addEventListener("click",function (){
    window.location.href = "https://github.com/Shalomhosheya/Assignment4Css";
})

var closeBtn =document.getElementById("closebutton2")
var assignemnt = document.getElementById("assignments")
var openBtn = document.getElementById("openBtn")
closeBtn.addEventListener("click",function (){
    assignemnt.style.display="none"
    closeBtn.style.display="none"
})
openBtn.addEventListener("click",function (){
    assignemnt.style.display="flex"
    closeBtn.style.display="block"
})