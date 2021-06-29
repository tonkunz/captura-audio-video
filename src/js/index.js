import "../styles/styles.scss";
import img from "../assets/policial-vetor.svg";
import { getMedia } from "./getMedia";

const createTitle = () => {
  const textH1 = document.createElement("h1");
  textH1.innerText = "Captura Áudio e Vídeo " + process.env.NODE_ENV;
  textH1.classList.add("title");
  return textH1;
}

const imgComponent = () => {
  const elImg = new Image(300);
  elImg.src = img;
  return elImg;
}

const btnComponent = () => {
  const btn = document.createElement("button");
  btn.innerText = "Capturar Media";
  btn.type = "button";
  btn.addEventListener("click", () => getMedia({ video: true }));
  return btn;
}

document.body.appendChild(createTitle());
document.body.appendChild(imgComponent());
document.body.appendChild(btnComponent());
