export default class Counter {
  constructor (DOMElement, value = 0) {
    this.element = DOMElement;
    this.element.textContent = value;
  }

  set (value) {
    this.element.textContent = value;
  }
};
