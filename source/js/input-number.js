export default class InputNumber {
  constructor(DOMElement, value = 0) {
    this.MAX_VALUE = 99;
    this.element = DOMElement;
    this.decButton = this.element.querySelector('.input-number__decrement-button');
    this.decButton.addEventListener('click', this.decrementValue.bind(this));
    this.incButton = this.element.querySelector('.input-number__increment-button');
    this.incButton.addEventListener('click', this.incrementValue.bind(this));
    this.input = this.element.querySelector('.input-number__input');
    this.input.addEventListener('change', this.changeValue.bind(this));
    this.input.value = value;
  };

  getValue() {
    return Number.parseInt(this.input.value);
  };

  setValue(value = 0) {
    this.input.value = value;

  };

  changeValue(evt) {
    if (Number.isNaN(evt.target.value)) {
      this.input.value = 0;
      return;
    }
    if (evt.target.value < 0) {
      this.input.value = 0;
    } else if (evt.target.value > this.MAX_VALUE) {
      this.input.value = this.MAX_VALUE;
    } else {
      this.input.value = evt.target.value;
    }
  }

  decrementValue() {
    console.log(this);
    if(this.getValue() > 0) {
      this.setValue(this.getValue() - 1);
    }
  }

  incrementValue() {
    if (this.getValue() < this.MAX_VALUE) {
      this.setValue(this.getValue() + 1);
    }
  }
}
