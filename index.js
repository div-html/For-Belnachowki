let audio=document.querySelector("audio");
let btn=document.querySelector("#btn1");
let section=document.querySelector(".content");
let section1=document.querySelector(".content2");
let section2=document.querySelector(".content3");
let section3=document.querySelector(".content4");
btn.addEventListener("click",function(){
      audio.play();
    audio.volume = 0.5;

    section.classList.add("fadeOutAnimation");

    setTimeout(() => {
        section.style.display = "none";
        section1.style.display = "flex";
        section1.classList.add("fadeInAnimation");
    }, 1500);
});
let button=document.querySelector("#next");
button.addEventListener("click",function(){
    section1.classList.remove("fadeInAnimation");
    section1.classList.add("fadeOutAnimation");

    setTimeout(() => {
        section1.style.display = "none";
        section2.style.display = "flex";
        section2.classList.add("fadeInAnimation");
    }, 1500);
    
});
let button2=document.querySelector("#ext");
button2.addEventListener("click", function(){
    section2.classList.remove("fadeInAnimation");
    section2.classList.add("fadeOutAnimation");
    setTimeout(()=>{
        section2.style.display="none";
        section3.style.display="flex";
        section3.classList.add("fadeInAnimation");
    },1500)
})