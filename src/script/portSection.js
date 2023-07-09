const introMent = document.querySelector(".introment");
const workImg = document.querySelectorAll(".work__inner a");

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
    if (progress > 0.603) {
      document.querySelector("#portSection3").classList.add("bg__white");
      document.querySelector("#portSection3").style.color = "black";
    } else if (progress < 0.603 && progress > 0) {
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
