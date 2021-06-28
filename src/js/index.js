import "../styles/styles.scss";
import img from "../assets/policial-vetor.svg";

const createTitle = () => {
  const textH1 = document.createElement("h1");
  textH1.innerText = "WebAPI's";
  textH1.classList.add("title");
  return textH1;
}

const imgComponent = () => {
  const elImg = new Image(300);
  elImg.src = img;
  return elImg;
}

document.body.appendChild(createTitle());
document.body.appendChild(imgComponent());
