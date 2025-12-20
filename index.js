let audio=document.querySelector("audio");
let btn=document.querySelector("button");
let section=document.querySelector(".content");
let section1=document.querySelector(".content2");
console.log(audio + btn);
btn.addEventListener("click",function(){
    audio.play();
    audio.volume=0.5;
    section.classList.add("fadeOut");
    section.style.display="none";
    section1.style.display="flex";
    section1.classList.add("fadeInAnimation");
    section1.classList.add("content2")});
