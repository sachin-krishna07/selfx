const threeline=document.querySelector(".fa-bars-staggered"),
    cross=document.querySelector(".fa-x");
    let middle_nav=document.querySelector(".middle-nav");

 threeline.onclick=function(){
    middle_nav.classList.add("active");
    cross.classList.add("show")
};
cross.onclick=function(){
    middle_nav.classList.remove("active");
    cross.classList.remove("show")
 };


        window.onload = function () {
            let bar = document.querySelectorAll('.bar');
            bar.forEach((progress) => {
              let value = progress.getAttribute('data-value');
              progress.style.width = `${value}%`;
              let count = 0;
              let progressAnimation = setInterval(() => {
                count++;
                progress.setAttribute('data-text', `${count}%`);
                if (count >= value) {
                  clearInterval(progressAnimation);
                }
              }, 15);
            });
          };

          let indicator =document.querySelector(".indicator");
          let documentHeight=document.documentElement.scrollHeight;
          let viewportHeight=document.documentElement.clientHeight;
          window.onscroll=()=>{
            let percentageScrolled=(scrollY/(documentHeight-viewportHeight))*100;
            indicator.style.width=percentageScrolled+"%";
          }


        //   ===================== about===================

        let skill =document.querySelector(".skills"),
        awards=document.querySelector(".awards"),
        experience=document.querySelector(".experience"),
        education=document.querySelector(".education");

        let aboutBox=document.querySelector(".about-box"),
        experienceBox=document.querySelector(".experience-box"),
        educationBox=document.querySelector(".education-box");

        education.onclick=function(){
            educationBox.classList.remove("hide");
            aboutBox.classList.add("hide");
            experienceBox.classList.add("hide");
        }
        experience.onclick=function(){
            educationBox.classList.add("hide");
            aboutBox.classList.add("hide");
            experienceBox.classList.remove("hide");
        }
        skill.onclick=function(){
            educationBox.classList.add("hide");
            aboutBox.classList.remove("hide");
            experienceBox.classList.add("hide");
        }


       








        // <!-- ..............Scroll Reveal ................ -->
ScrollReveal({
  reset:false,
  distance:'200px',
  duration:2000,
  delay:10
  
});
ScrollReveal().reveal('.right-section',{origin:'top'})
ScrollReveal().reveal('.left-section,.left-main-section, .right-main-section ,.content, form',{origin:'bottom'})
ScrollReveal().reveal('.service-left-box',{origin:'left'})
ScrollReveal().reveal('.service-right-box',{origin:'right'})

ScrollReveal({
  reset:false,
  distance:'50px',
  duration:3000,
  delay:10
  
});
ScrollReveal().reveal('.',{origin:'top'})
ScrollReveal().reveal('.about-heading, .service-heading, .project-heading,.blog-heading',{origin:'bottom'})
ScrollReveal().reveal('',{origin:'left'})
ScrollReveal().reveal('',{origin:'right'})


ScrollReveal({
  reset:false,
  distance:'500px',
  duration:2000,
  delay:100
  
});
ScrollReveal().reveal('.project1, .blog-1,.project2, .blog-2,.project3,.blog-3, .project4,.blog-4',{origin:'bottom'});

let message_disable=document.querySelector(".message-cross"),
subscribeBox=document.querySelector(".subscribe"),
subscribeBTN=document.querySelector(".subscribe_btn");

subscribeBTN.onclick=()=>{
  subscribeBox.classList.remove("hide");
  subscribeBox.classList.add("subs-style");
  
}
message_disable.onclick=()=>{
  subscribeBox.classList.remove("subs-style");
  subscribeBox.classList.add("hide");

  clearTimeout();
}
   setTimeout(() => {
     subscribeBox.classList.remove("hide");
     subscribeBox.classList.add("subs-style");
   }, 25000);