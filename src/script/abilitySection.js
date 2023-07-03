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
