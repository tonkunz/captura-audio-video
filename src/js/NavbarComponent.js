const navbarComponent = () => {
  const navBar = document.createElement("nav");
  navBar.classList.add("navbar");
  navBar.appendChild(navLink("/", "Home"));
  navBar.appendChild(navLink("video.html", "Captura de Vídeo"));
  navBar.appendChild(navLink("audio.html", "Captura de Áudio"));

  return navBar;
}

const navLink = (link, linkText) => {
  const a = document.createElement("a");
  a.href = link ? link : "#";
  a.innerText = linkText;

  return a;
}

export default navbarComponent;
