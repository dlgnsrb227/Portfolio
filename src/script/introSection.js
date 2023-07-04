const backLogo = document.querySelector("#introSection1 svg");
const introDesc = document.querySelector("#introSection1 p");
const spinStick = document.querySelector("#introSection2 .spin__stick");
const T1 = document.querySelector(".spin__text .t1");
const T2 = document.querySelector(".spin__text .t2");
const T3 = document.querySelector(".spin__text .t3");
const T4 = document.querySelector(".spin__text .t4");
const t4Text = document.querySelector(".spin__text .t4__text");

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({
  "(min-width: 500px)": function () {
    gsap.to(introDesc, {
      opacity: 0,
      y: -400,
      scrollTrigger: {
        trigger: "#introSection1",
        scrub: 1,
        start: "300px top",
        end: "bottom -150%",
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
      end: "+=300%",
      scrub: 1,
      pin: true,
      anticipatePin: true,
      markers: false,
    });

    gsap.defaults({ ease: "none", duration: 2 });
    const introAni2 = gsap.timeline();
    introAni2
      .set(spinStick, { borderRadius: 30, width: "50px", opacity: 1 })
      .to(spinStick, {
        width: "50px",
        height: "420px",
        y: "-210px",
        borderRadius: 30,
      })
      .to(spinStick, { rotationZ: 1350, transformOrigin: "50% 94%" })
      .to(spinStick, {
        rotationZ: 1350,
        transformOrigin: "50% 94%",
        height: "840px",
        y: "-395px",
        x: "394px",
      })
      .set(spinStick, {
        x: "27px",
        y: "-26px",
        rotationZ: -90,
        transformOrigin: "50% 50%",
      })
      .to(spinStick, {
        scale: 25,
      })
      .to(spinStick, { autoAlpha: 0 });
    ScrollTrigger.create({
      animation: introAni2,
      trigger: "#introSection2",
      start: "top top",
      end: "+=2000%",
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
  },
  "(max-width: 499px)": function () {
    gsap.to(introDesc, {
      opacity: 0,
      y: -400,
      scrollTrigger: {
        trigger: "#introSection1",
        scrub: 1,
        start: "300px top",
        end: "bottom -150%",
        markers: false,
      },
    });
    gsap.defaults({ ease: "none", duration: 2 });
    const introAni1 = gsap.timeline();
    introAni1
      .set(backLogo, { opacity: 0.4 })
      .to(backLogo, { x: -200, y: -300, rotation: 345, scale: 4, opacity: 1 })
      .to(backLogo, {
        x: -200,
        y: -1100,
        rotation: 375,
        scale: 6,
        opacity: 0,
      });

    // introAni1.fromTo(backLogo,
    // {y:0, x:0, rotation: 0, scale: 1.2, opacity: 0.5},
    // {y:-1000, x: -500, rotation: 360, scale: 5, opacity: 1},)

    ScrollTrigger.create({
      animation: introAni1,
      trigger: "#introSection1",
      start: "top top",
      end: "+=300%",
      scrub: 1,
      pin: true,
      anticipatePin: true,
      markers: false,
    });

    gsap.defaults({ ease: "none", duration: 2 });
    const introAni2 = gsap.timeline();
    introAni2
      .set(spinStick, { borderRadius: 30, width: "50px", opacity: 1 })
      .to(spinStick, {
        width: "50px",
        height: "420px",
        y: "-210px",
        borderRadius: 30,
      })
      .to(spinStick, { rotationZ: 1350, transformOrigin: "50% 94%" })
      .to(spinStick, {
        rotationZ: 1350,
        transformOrigin: "50% 94%",
        height: "840px",
        y: "-395px",
        x: "394px",
      })
      .set(spinStick, {
        x: "27px",
        y: "-26px",
        rotationZ: -90,
        transformOrigin: "50% 50%",
      })
      .to(spinStick, {
        scale: 36,
      })
      .to(spinStick, { autoAlpha: 0 });
    ScrollTrigger.create({
      animation: introAni2,
      trigger: "#introSection2",
      start: "top top",
      end: "+=2000%",
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
  },
});
