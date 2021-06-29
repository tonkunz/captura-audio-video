export function getMedia(constraints) {
  let stream = null;
  
  navigator.mediaDevices.getUserMedia(constraints)
    .then(res => this.stream = res)
    .catch(err =>  alert("Ops, ocorreu um erro: ", err));

  return stream;
}