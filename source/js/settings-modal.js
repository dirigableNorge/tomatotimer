import Checkbox from './checkbox.js';
import InputNumber from './input-number.js';

export default class SettingsModal {
  constructor(DOMElement, settings) {
    this.element = DOMElement;

    this.closeButton = this.element.querySelector('.settings__close-button');
    this.closeButton.addEventListener('click', this.hide.bind(this));

    this.form = this.element.querySelector('.settings__form');
    this.form.addEventListener('change', this.change.bind(this));

    this.stepMinutes = new InputNumber(document.getElementById('stepTime'))
    this.breakMinutes = new InputNumber(document.getElementById('breakTime'));
    this.bigBreakMinutes = new InputNumber(document.getElementById('bigBreakTime'));
    this.stepsRoundCount = new InputNumber(document.getElementById('stepsRoundCount'));
    this.stepsDayCount = new InputNumber(document.getElementById('stepsDayCount'));

    this.soundNotification = new Checkbox(document.getElementById('soundNotification'));
    this.soundTick = new Checkbox(document.getElementById('soundTick'));
    this.notifictaion = new Checkbox(document.getElementById('notification'));
  }

  show() {
    this.element.classList.remove('modal-hide');

  }

  hide() {
    this.element.classList.add('modal-hide');
  }

  change(evt) {
    console.log(evt.target);
  }
};
