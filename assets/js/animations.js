// const elem1 = document.querySelector(".nom_site");
// const elem2 = document.querySelector(".recherche_form");
// const elem3 = document.querySelector(".user_activity");

// const elem4 = document.querySelectorAll(".li_nav");
// const elem5 = document.querySelector(".nom_site");



// const elem6 = document.querySelectorAll(".li_nav");
// const elem7 = document.querySelector(".nom_site");
// const elem8 = document.querySelector(".nom_site");
// const elem9 = document.querySelector(".nom_site");



// const elem10 = document.querySelector(".nom_site");
// const elem11 = document.querySelector(".nom_site");
// const elem12 = document.querySelector(".nom_site");
// const elem13 = document.querySelector(".nom_site");
// const elem14 = document.querySelector(".nom_site");


// window.addEventListener('load', ()=>{
//     const TL = gsap.timeline({paused:true});

//     TL
//     .straggerFrom(
//         elem1, 
//         1,
//         {
//             top: -50,
//             opacity: 0,
//             ease: "power2.out"
//         },
//         0.3,
//     )
//     .straggerFrom(
//         btns, 
//         1,
//         {
//             opacity: 0,
//             ease: "power2.out"
//         },
//         0.3,
//         '-=1'
//     )
//     .from(
//         elem2,
//         1, 
//         {
//             width: 0,
//             ease: "power2.out"
//         },
//         '-=2'
//     )
//     .from(
//         elem3,
//         1, 
//         {
//             width: 0,
//             ease: "power2.out"
//         },
//         '-=2'
//     )
//     .from(
//         elem4,
//         1, 
//         {
//             width: 0,
//             ease: "power2.out"
//         },
//         '-=2'
//     )



//     .from(
//         elem5,
//         0.4, 
//         {
//             transform: "scale(0)",
//             ease: "power2.out"
//         },
//         '-=2'
//     )
//     .from(
//         elem6,
//         0.4, 
//         {
//             right: -200,
//             ease: "power2.out"
//         },
//         '-=1'
//     )





//     TL.play();
// })

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in, .zoom-in, .slide-in, .rotate-in, .bounce-in');

    const checkVisibility = () => {
        const viewportHeight = window.innerHeight;

        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < viewportHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    };

    // Vérifiez la visibilité au chargement de la page
    checkVisibility();

    // Vérifiez la visibilité lors du défilement
    window.addEventListener('scroll', checkVisibility);
});x
