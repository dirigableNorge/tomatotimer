export default class Checkbox {
  constructor(DOMElement, value = false, onChangeHandler) {
    this.element = DOMElement;
    this.element.addEventListener('change', onChangeHandler)
    value ? this.element.checked = true : this.element.checked = false;
  }

  getValue() {
    return this.element.checked ? true : false;
  }

  setValue(value = false) {
    value ? this.element.checked = true : this.element.checked = false;
  }
}
