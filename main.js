const body = document.querySelector("body");
const manuToggle = document.querySelector('.navManuToggle');
manuToggle.addEventListener("click", function(){
    body.classList.toggle("open");
});
// scroll reveal
window.sr = ScrollReveal();
sr.reveal('.animate-left',{
origin: 'left',
duration: 1000,
distance: '25rem',
delay: 300
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 2000,
    distance: '35rem',
    delay: 600
    });

sr.reveal('.animate-top',{
    origin:'top',
    duration:1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration:1000,
    distance: '25rem',
    delay: 600
});