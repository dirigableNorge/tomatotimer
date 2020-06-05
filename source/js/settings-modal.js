import Settings from './settings';
import Checkbox from './checkbox.js';
import InputNumber from './input-number.js';

const settingsLS = new Settings();

export default class SettingsModal {
  constructor(DOMElement, settings) {
    const { stepMinutes,
            breakMinutes,
            bigBreakMinutes,
            stepsRoundCount,
            stepsDayCount,
            soundNotification,
            soundTick,
            notification
          } = settings;

    this.element = DOMElement;

    this.closeButton = this.element.querySelector('.settings__close-button');
    this.closeButton.addEventListener('click', this.hide.bind(this));

    this.form = this.element.querySelector('.settings__form');
    this.form.addEventListener('change', this.change);

    this.stepMinutes = new InputNumber(document.getElementById('stepTime'), stepMinutes, this.change.bind(this));
    this.breakMinutes = new InputNumber(document.getElementById('breakTime'), breakMinutes, this.change.bind(this));
    this.bigBreakMinutes = new InputNumber(document.getElementById('bigBreakTime'), bigBreakMinutes, this.change.bind(this));
    this.stepsRoundCount = new InputNumber(document.getElementById('stepsRoundCount'), stepsRoundCount, this.change.bind(this));
    this.stepsDayCount = new InputNumber(document.getElementById('stepsDayCount'), stepsDayCount, this.change.bind(this));

    this.soundNotification = new Checkbox(document.getElementById('soundNotification'), soundNotification);
    this.soundTick = new Checkbox(document.getElementById('soundTick'), soundTick);
    this.notifictaion = new Checkbox(document.getElementById('notification'), notification);
  }

  show() {
    this.element.classList.remove('modal-hide');

  }

  hide() {
    this.element.classList.add('modal-hide');
  }

  change(evt) {
    const newSettings = {
      stepMinutes: this.stepMinutes.getValue(),
      breakMinutes: this.breakMinutes.getValue(),
      bigBreakMinutes: this.bigBreakMinutes.getValue(),
      stepsRoundCount: this.stepsRoundCount.getValue(),
      stepsDayCount: this.stepsDayCount.getValue(),
      soundNotification: this.soundNotification.getValue(),
      soundTick: this.soundTick.getValue(),
      notification: this.notifictaion.getValue(),
    }
    settingsLS.set(newSettings);
  }
};
