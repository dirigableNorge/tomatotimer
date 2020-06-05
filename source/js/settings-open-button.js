export default class SettingsButton {
  constructor(DOMElement, onClickHandler) {
    this.element = DOMElement;
    this.element.addEventListener('click', onClickHandler);
  }
}
