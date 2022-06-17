import { getRandomColor } from "./utils";

export default function initApp() {
    console.log("Hello world");

    const newButton = document.createElement("button");
    newButton.className = "button";
    newButton.textContent = "Изменить цвет страницы";
    document.body.append(newButton);

    newButton.onclick = function() {
        document.body.style.background = getRandomColor();
      };
  }