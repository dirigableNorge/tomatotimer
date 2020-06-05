export default class Timer {
  constructor(DOMElement, minutes = "25", seconds= '00') {
    this.element = DOMElement;
    this.element.textContent = `${minutes}:${seconds}`;
  }

  set(countTime) {
    let minutes = Math.floor(countTime / 60);
    let seconds = countTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    this.element.textContent = `${minutes}:${seconds}`;
  }
};
