export default class SettingsModal {
  constructor(DOMElement, settings) {
    this.element = DOMElement;
  }

  show() {
    this.element.classList.remove('modal-hide');
    
  }

  hide() {
    this.element.classList.add('modal-hide');
  }
};
