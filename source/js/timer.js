export default class Timer {
  constructor(DOMElement, minutes = "25", seconds= '00') {
    this.element = DOMElement;
    this.element.textContent = `${minutes}:${seconds}`;
  }

  set(minutes, seconds) {
    this.element.textContent = `${minutes}:${seconds}`;
  }
};
