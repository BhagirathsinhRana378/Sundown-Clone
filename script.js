

function locomotion() {

    document.addEventListener("DOMContentLoaded", () => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true,
            // multiplier: 1.3, // Speed multiplier (1 = normal, >1 = faster)
            lerp: 0.1,       // Smoothness factor (0 = instant, 1 = super slow)
            smartphone: {
                smooth: true,
                breakpoint: 768 // Customize breakpoint for mobile
            },
            tablet: {
                smooth: true
            }
        });
        window.addEventListener("resize", () => {
            scroll.update();
        });
    });
}
function mousehover() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    });


    let elems = document.querySelectorAll(".element");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })

}

function swipperanimation() {
    window.addEventListener("load", function () {
        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
            loop: true, // ensure looping is on
            autoplay: {
                delay: 2000, // 2 seconds
                disableOnInteraction: false,
            },
            cardsEffect: {
                slideShadows: true,
            },
            speed: 1000, // smooth transition speed (optional)
        });
    });
}


// -----------------------------------------------------------
swipperanimation();
locomotion();
mousehover();



function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation();