function checkScreenSize() {
  if (window.innerWidth < 800) {
    // 화면 너비가 800px보다 작을 때
    location.reload(); // 페이지 새로고침
  }
}

window.addEventListener("resize", checkScreenSize);

import "./src/assets/scss/style.scss";
import "./src/script/introSection.js";
import "./src/script/portSection.js";
import "./src/script/abilitySection.js";
import "./src/script/workSection.js";
import "./src/script/etc.js";
