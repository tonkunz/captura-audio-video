const video = document.querySelector("#videoElement");
const capture = document.getElementById("capture");
const hasAudioSelect = document.getElementById('has-audio');

const listaDownload = document.getElementById('lista-download'); 

const btnStartRecord = document.getElementById("start-record");
const btnStopRecord = document.getElementById('stop-record');

let cameraStream = null;
let recorder;

function initPreview(hasAudio) {
  const constraints = {
    video: true,
    audio: hasAudio
  }

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(constraints)
      .then(function (stream) {
        video.srcObject = stream;
        cameraStream = stream;
      })
      .catch(function (error) {
        alert("Ocorreu um erro inexperado: " + error);
      });
  }
}

function startRecord() {
  recorder = new MediaRecorder(cameraStream, {
    MimeType: "video/mp4"
  });

  btnStartRecord.disabled = true;
  btnStopRecord.disabled = false
  recorder.start();
}

function stopRecord() {
  recorder.ondataavailable = e => {
    const listItem = document.createElement("li");
    const a = document.createElement("a");

    a.download = ['video_', (new Date() + '').slice(4, 28), '.webm'].join('');
    a.href = URL.createObjectURL(e.data);
    a.textContent = a.download;

    listItem.appendChild(a);
    listaDownload.appendChild(listItem);
  }
  recorder.stop();
  btnStartRecord.disabled = false;
}

(() => {
  console.log("video module started...");
  btnStopRecord.disabled = true;
  initPreview(false);

  hasAudioSelect.onchange = (e) => {
    cameraStream.getTracks().forEach(track => track.stop());

    initPreview(e.target.checked);
  }

  btnStartRecord.addEventListener("click", startRecord);
  btnStopRecord.addEventListener("click", stopRecord);
})();