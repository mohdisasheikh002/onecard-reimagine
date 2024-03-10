var mbtn = document.querySelector(".menubtn");
var toggle = true;

mbtn.addEventListener("click", function (e) {
  if (toggle === true) {
    gsap.to(".l2", {
      opacity: 0,
    });

    gsap.to(".l1", {
      delay: 0.2,
      y: 0,
      rotate: 45,
    });

    gsap.to(".l3", {
      delay: 0.2,
      y: 0,
      rotate: -45,
    });

    gsap.to(".menubox", {
      top: "0%",
    });

    gsap.to("body", {
      overflow: "hidden",
    });

    toggle = false;
  } else {
    gsap.to("body", {
      overflow: "initial",
    });

    gsap.to(".menubox", {
      top: "-70%",
    });

    gsap.to(".l1", {
      y: "-350%",
      rotate: 0,
    });

    gsap.to(".l3", {
      y: "350%",
      rotate: 0,
    });

    gsap.to(".l2", {
      delay: 0.2,
      opacity: 1,
    });

    toggle = true;
  }
});
