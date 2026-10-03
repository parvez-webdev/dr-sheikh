$(document).ready(function () {
    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
    });
});
// Hero section start
gsap.from("#content > *", {
  y: 35,
  opacity: 0,
  duration: 0.7,
  stagger: 0.12,
  ease: "power3.out"
});
gsap.from("#images", {
  scale: 0.92,
  opacity: 0,
  duration: 1.1,
  ease: "power3.out",
});
// Hero section end
// About section start
gsap.from("#image", {
  x: -60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#image",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});
gsap.from("#abo-cont > *:not(#view)", {
    x: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#abo-cont",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from("#view", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#view",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
// About section end
// Services section start
gsap.from(".head-text > *", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.14,
    ease: "power3.inout",
    scrollTrigger: {
        trigger: ".head-text",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});

gsap.utils.toArray(".card-item").forEach((card, i) => {
    gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.inout",
            delay: (i % 3) * 0.15,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});
window.addEventListener("load", () => ScrollTrigger.refresh());
// Services section end
// Locations section start
gsap.from(".loc-head > *", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".loc-head ",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".loc-card", {
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".loc-card",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".loc-map", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#location-map",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
// Location section start
gsap.from(".appt-heading > *", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".appt-heading",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".apt-card", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".apt-card",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
