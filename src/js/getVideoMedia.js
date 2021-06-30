var video = document.querySelector("#videoElement");
var capture = document.getElementById("capture");
var btnCapture = document.getElementById("btn-capture");
var cameraStream = null;

function initCapture() {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
        cameraStream = stream;
      })
      .catch(function (error) {
        alert("Ocorreu um erro inexperado: " + error);
      });
  }
}

function captureSnapshot() {
  if (null != cameraStream) {
    var ctx = capture.getContext('2d');
    var img = new Image();

    ctx.drawImage(videoElement, 0, 0, capture.width, capture.height);

    img.src = capture.toDataURL("image/png");
    img.width = 1024;
    img.height = 768;

    // salvar no localStorage
    // var dataURL = capture.toDataURL("image/png");
    // dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // localStorage.setItem("imgData", dataURL);
  }
}

(() => {
  console.log("video module started...");

  initCapture();

  btnCapture.addEventListener("click", captureSnapshot);
})();