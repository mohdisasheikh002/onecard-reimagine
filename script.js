var mbtn = document.querySelector(".menubtn");
var toggle = true;

mbtn.addEventListener("click", function (e) {
  if (toggle === true) {
    var tl1 = gsap.timeline();

    tl1.to(".l2", {
      width: "0vmax",
    });

    tl1.to([".l1", ".l3"], {
      top: "48%",
      onComplete: () => {
        gsap.to(".l1", {
          transform: "translate(-50%, -50%)",
          rotate: "45deg",
        });
        gsap.to(".l3", {
          transform: "translate(-50%, -50%)",
          rotate: "-45deg",
        });
      },
    });

    toggle = false;
  } else {
    var tl2 = gsap.timeline();

    tl2.to([".l1", ".l3"], {
      rotate: "0deg",
      onComplete: () => {
        gsap.to(".l1", {
          top: "28%",
          transform: "translate(-50%, 0%)",
        });
        gsap.to(".l3", {
          bottom: "28%",
          transform: "translate(-50%, 0%)",
        });
      },
    });

    tl2.to(".l2", {
      width: "3vmax",
    });

    toggle = true;
  }
});
