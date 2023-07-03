const backLogo = document.querySelector("#introSection1 svg");
const introDesc = document.querySelector("#introSection1 p");
const spinStick = document.querySelector("#introSection2 .spin__stick");
const T1 = document.querySelector(".spin__text .t1");
const T2 = document.querySelector(".spin__text .t2");
const T3 = document.querySelector(".spin__text .t3");
const T4 = document.querySelector(".spin__text .t4");
const t4Text = document.querySelector(".spin__text .t4__text");
const introMent = document.querySelector(".introment");
const workImg = document.querySelectorAll(".work__inner a");
const abilitySpan = document.querySelectorAll(".skew__eff");

gsap.registerPlugin(ScrollTrigger);

gsap.to(introDesc, {
  duration: 2,
  opacity: 0,
  y: -400,
  scrollTrigger: {
    trigger: "#introSection1",
    scrub: 1,
    start: "300px top",
    end: "bottom -1200px",
    markers: false,
  },
});
gsap.defaults({ ease: "none", duration: 2 });
const introAni1 = gsap.timeline();
introAni1
  .set(backLogo, { opacity: 0.4 })
  .to(backLogo, { x: -200, y: -800, rotation: 345, scale: 5, opacity: 1 })
  .to(backLogo, {
    x: -200,
    y: -1500,
    rotation: 375,
    scale: 5,
    opacity: 0,
  });
// introAni1.fromTo(backLogo,
// {y:0, x:0, rotation: 0, scale: 1.2, opacity: 0.5},
// {y:-1000, x: -500, rotation: 360, scale: 5, opacity: 1},)

ScrollTrigger.create({
  animation: introAni1,
  trigger: "#introSection1",
  start: "top top",
  end: "+=3000",
  scrub: 1,
  pin: true,
  anticipatePin: true,
  markers: false,
});

gsap.defaults({ ease: "none", duration: 2 });
const introAni2 = gsap.timeline();
introAni2
  .set(spinStick, { borderRadius: 30, width: "2.5vw", opacity: 1 })
  .to(spinStick, {
    width: "2.5vw",
    height: "42vh",
    y: "-21vh",
    borderRadius: 30,
  })
  .to(spinStick, { rotationZ: 1350, transformOrigin: "50% 94%" })
  .to(spinStick, {
    rotationZ: 1350,
    transformOrigin: "50% 94%",
    height: "84vh",
    y: "-39.5vh",
    x: "20vw",
  })
  .set(spinStick, {
    x: "1.35vw",
    y: "-2.5vh",
    rotationZ: -90,
    transformOrigin: "50% 50%",
  })
  .to(spinStick, {
    scale: 22,
  })
  .to(spinStick, { autoAlpha: 0 });
ScrollTrigger.create({
  animation: introAni2,
  trigger: "#introSection2",
  start: "top top",
  end: "+=15000",
  scrub: true,
  pin: true,
  anticipatePin: true,
  markers: false,
  onUpdate: (self) => {
    let progress = self.progress.toFixed(4);
    // console.log(progress);
    if (progress > 0 && progress < 0.2398) {
      document.querySelectorAll(".spin__text span").forEach((e) => {
        e.classList.remove("active");
      });
      T1.classList.add("active");
    } else if (progress > 0.2398 && progress < 0.2932) {
      document.querySelectorAll(".spin__text span").forEach((e) => {
        e.classList.remove("active");
      });
      T2.classList.add("active");
    } else if (progress > 0.2932 && progress < 0.3465) {
      document.querySelectorAll(".spin__text span").forEach((e) => {
        e.classList.remove("active");
      });
      T3.classList.add("active");
      spinStick.classList.remove("active");
    } else if (progress > 0.3465 && progress < 0.4) {
      document.querySelectorAll(".spin__text span").forEach((e) => {
        e.classList.remove("active");
        T4.classList.add("active");
        t4Text.classList.add("active");
        spinStick.classList.add("active");
      });
    } else if (progress > 0.4) {
      document.querySelectorAll(".spin__text span").forEach((e) => {
        e.classList.remove("active");
      });
      spinStick.classList.remove("active");
    }
  },
});

gsap.defaults({ ease: "none", duration: 2 });
const portAni1 = gsap.timeline();
portAni1.set(introMent, { x: 100, opacity: 0 }).to(introMent, {
  x: 0,
  opacity: 1,
});

ScrollTrigger.create({
  animation: portAni1,
  trigger: "#portSection1",
  start: "top top",
  end: "+=2000",
  scrub: 1,
  pin: true,
  // anticipatePin: true,
  markers: false,
});

gsap.defaults({ ease: "none", duration: 2 });
const portAni2 = gsap.timeline();
portAni2
  .set(workImg, { y: "100vh" })
  .staggerTo(workImg, 2, { y: "-100vh" }, 1.5);
// .to(workImg[0], { y: "-100vh" })
// .to(workImg[1], { y: "-100vh" })
// .to(workImg[2], { y: "-100vh" })
// .to(workImg[3], { y: "-100vh" })
// .to(workImg[4], { y: "-100vh" })
// .to(workImg[5], { y: "-100vh" })
// .to(workImg[6], { y: "-100vh" })
// .to(workImg[7], { y: "-100vh" });

ScrollTrigger.create({
  animation: portAni2,
  trigger: "#portSection3",
  start: "top top",
  end: "+=8000",
  scrub: 1,
  pin: true,
  // anticipatePin: true,
  markers: false,
  onUpdate: (self) => {
    let progress = self.progress.toFixed(3);
    // console.log("onUpdate", self.progress.toFixed(3));
    if (progress > 0.653) {
      document.querySelector("#portSection3").classList.add("bg__white");
      document.querySelector("#portSection3").style.color = "black";
    } else if (progress < 0.653 && progress > 0) {
      document.querySelector("#portSection3").classList.remove("bg__white");
      document.querySelector("#portSection3").style.color = "white";
    }
  },
  onEnter: () => {
    workImg.forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.querySelector("p").classList.add("active");
        document.querySelector("#portSection3 h3").style.filter = "blur(20px)";
      });
      e.addEventListener("mouseleave", () => {
        e.querySelector("p").classList.remove("active");
        document.querySelector("#portSection3 h3").style.filter = "blur(0px)";
      });
    });
  },
  onLeave: () => {
    document.querySelector("#horizontality").style.opacity = "1";
  },
  onEnterBack: () => {
    document.querySelector("#horizontality").style.opacity = "0";
  },
});

const horizon = document.querySelector("#horizontality");
const sections = gsap.utils.toArray("#horizontality > section");

gsap.to(sections, {
  ease: "none",
  x: "-400.1vw",
  scrollTrigger: {
    trigger: "#horizontality",
    start: "top top",
    end: () => "+=" + (horizon.offsetWidth - innerWidth),
    pin: true,
    scrub: 0.1,
    onUpdate: (self) => {
      let progress = self.progress.toFixed(3);
      // console.log(progress);
      if (progress > 0.5) {
        document.querySelector("#abilitySection2").classList.add("bg__black");
        document
          .querySelector("#abilitySection2")
          .classList.remove("bg__white");
        document.querySelector("#abilitySection2").style.color = "#ffffff";
        document.querySelector("#horizontality").style.backgroundColor =
          "#000000";
      } else if (progress < 0.5 && progress > 0) {
        document.querySelector("#abilitySection2").classList.add("bg__white");
        document.querySelector("#abilitySection2").style.color = "#000000";
        document.querySelector("#horizontality").style.backgroundColor =
          "#ffffff";
      }
    },
    onLeave: () => {
      document.querySelector("#workSection1").style.opacity = "1";
    },
    onEnterBack: () => {
      document.querySelector("#workSection1").style.opacity = "0";
    },
  },
});

const workRight = document.querySelector("#workSection1 .right__side");
const workLeft = document.querySelector("#workSection1 .left__side span");
const workAni1 = gsap.timeline();
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
    document.querySelector("#header").style.transform = "translateY(-100px)";
  },
  onEnterBack: () => {
    document.querySelector("#header").style.transform = "translateY(-100px)";
  },
  onLeave: () => {
    document.querySelector("#header").style.transform = "translateY(0px)";
  },
  onLeaveBack: () => {
    document.querySelector("#header").style.transform = "translateY(0px)";
  },
});
