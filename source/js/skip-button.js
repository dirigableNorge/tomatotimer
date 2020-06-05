export default class SkipButton {
  constructor(DOMElement, onClickHandler) {
    this.button = DOMElement;
    this.button.addEventListener('click', onClickHandler);
  }
};
