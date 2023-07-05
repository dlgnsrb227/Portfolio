const workRight = document.querySelector("#workSection1 .right__side");
const workLeft = document.querySelector("#workSection1 .left__side span");
const workAni1 = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({
  "(min-width: 500px)": function () {
    workAni1
      .set(workRight, { y: "120vh", opacity: "0.8" })
      .to(workRight, { y: "-150vh", opacity: "1" });

    ScrollTrigger.create({
      animation: workAni1,
      ease: "none",
      trigger: "#workSection1",
      start: "top top",
      end: "+=2500",
      pin: "#workSection1",
      anticipatePin: true,
      scrub: 1,
      markers: false,
      onEnter: () => {
        document.querySelector("#header").style.transform =
          "translateY(-100px)";
      },
      onEnterBack: () => {
        document.querySelector("#header").style.transform =
          "translateY(-100px)";
      },
      onLeave: () => {
        document.querySelector("#header").style.transform = "translateY(0px)";
      },
      onLeaveBack: () => {
        document.querySelector("#header").style.transform = "translateY(0px)";
      },
    });
  },
});

ScrollTrigger.matchMedia({
  "(max-width: 500px)": function () {
    workAni1
      .set(workRight, { y: "80vh", opacity: "0.8" })
      .to(workRight, { y: "-100vh", opacity: "1" });

    ScrollTrigger.create({
      animation: workAni1,
      ease: "none",
      trigger: "#workSection1",
      start: "top top",
      end: "+=2500",
      pin: "#workSection1",
      // anticipatePin: true,
      scrub: true,
      markers: false,
      onEnter: () => {
        document.querySelector("#header").style.transform =
          "translateY(-100px)";
      },
      onEnterBack: () => {
        document.querySelector("#header").style.transform =
          "translateY(-100px)";
      },
      onLeave: () => {
        document.querySelector("#header").style.transform = "translateY(0px)";
      },
      onLeaveBack: () => {
        document.querySelector("#header").style.transform = "translateY(0px)";
      },
    });
  },
});

// workAni1
//   .set(workRight, { y: "120vh", opacity: "0.8" })
//   .to(workRight, { y: "-150vh", opacity: "1" });

// ScrollTrigger.create({
//   animation: workAni1,
//   ease: "none",
//   trigger: "#workSection1",
//   start: "top top",
//   end: "+=2500",
//   pin: "#workSection1",
//   anticipatePin: true,
//   scrub: 1,
//   markers: false,
//   onEnter: () => {
//     document.querySelector("#header").style.transform = "translateY(-100px)";
//   },
//   onEnterBack: () => {
//     document.querySelector("#header").style.transform = "translateY(-100px)";
//   },
//   onLeave: () => {
//     document.querySelector("#header").style.transform = "translateY(0px)";
//   },
//   onLeaveBack: () => {
//     document.querySelector("#header").style.transform = "translateY(0px)";
//   },
// });
