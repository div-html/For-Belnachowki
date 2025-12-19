let audio=document.querySelector("audio");
let btn=document.querySelector("button");
let section=document.querySelector(".content");
let section1=document.querySelector(".content2");
console.log(audio + btn);
btn.addEventListener("click",function(){
    audio.play();
    section.classList.add("fadeOut");
    section1.style.display="block";
    section1.classList.add("fadeInAnimation");
})  ;