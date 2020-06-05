export default class Checkbox {
  constructor(DOMElement, value = false) {
    this.element = DOMElement;
    this.element.value = value;
  }

  getValue() {
    return this.element.value;
  }

  setValue(value = false) {
    this.element.value = value;
  }
}
