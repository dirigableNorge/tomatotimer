import Checkbox from './checkbox.js';
import InputNumber from './input-number.js';
import LanguagePanel from './language-panel.js';

export default class SettingsModal {
  constructor(DOMElement, settings) {
    this.settings = settings;
    this.element = DOMElement;

    this.closeButton = this.element.querySelector('.settings__close-button');
    this.closeButton.addEventListener('click', this.hide.bind(this));

    this.languagePanel = new LanguagePanel(this.element.querySelector('.settings'), settings.language, this.changeLanguage.bind(this));

    this.stepMinutes = new InputNumber(document.getElementById('stepTime'), this.settings.stepMinutes, this.change.bind(this));
    this.breakMinutes = new InputNumber(document.getElementById('breakTime'), this.settings.breakMinutes, this.change.bind(this));
    this.bigBreakMinutes = new InputNumber(document.getElementById('bigBreakTime'), this.settings.bigBreakMinutes, this.change.bind(this));
    this.stepsRoundCount = new InputNumber(document.getElementById('stepsRoundCount'), this.settings.stepsRoundCount, this.change.bind(this));
    this.stepsDayCount = new InputNumber(document.getElementById('stepsDayCount'), this.settings.stepsDayCount, this.change.bind(this));

    this.soundNotification = new Checkbox(document.getElementById('soundNotification'), this.settings.soundNotification, this.change.bind(this));
    this.soundTick = new Checkbox(document.getElementById('soundTick'), this.settings.soundTick, this.change.bind(this));
    this.notifictaion = new Checkbox(document.getElementById('notification'), this.settings.notification, this.change.bind(this));

    this.changeLanguage(this.settings.language);
  };

  show() {
    this.element.classList.remove('modal-hide');
    document.addEventListener('keydown', this.onEscDown.bind(this));
  };

  hide() {
    this.element.classList.add('modal-hide');
    document.removeEventListener('keydown', this.onEscDown);
  };

  onEscDown(evt) {
    if (evt.code === 'Escape') {
      this.hide();
    }
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
      language: this.languagePanel.getLanguage()
    };
    this.settings.set(newSettings);
  };

  changeLanguage(language) {
    const languagePack = this.settings.getLanguagePack(language);
    document.getElementById('stepTimeLabel').textContent = languagePack.stepMinutes;
    document.getElementById('breakTimeLabel').textContent = languagePack.breakMinutes;
    document.getElementById('bigBreakTimeLabel').textContent = languagePack.bigBreakMinutes;
    document.getElementById('stepsRoundCountLabel').textContent = languagePack.stepsRoundCount;
    document.getElementById('stepsDayCountLabel').textContent = languagePack.stepsDayCount;
    document.getElementById('soundNotificationLabel').textContent = languagePack.soundNotification;
    document.getElementById('soundTickLabel').textContent = languagePack.soundTick;
    document.getElementById('notificationLabel').textContent = languagePack.notification;
    this.change();
  };
};
