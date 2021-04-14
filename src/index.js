const webContent = document.querySelector(".content main");

import about from "./about";
import home from "./home";
import menu from "./menu";

console.log(home);
console.log(about);
console.log(menu);

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "home":
        webContent.innerText = home();
        break;
      case "menu":
        webContent.innerText = menu();
        break;
      case "about":
        webContent.innerText = about();
        break;
      default:
        webContent.innerText = "Weuh";
        break;
    }
  });
});
