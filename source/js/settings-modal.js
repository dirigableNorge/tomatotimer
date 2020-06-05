export default class SettingsModal {
  constructor(DOMElement, settings) {
    this.element = DOMElement;
    // this.stepMinutesInput = this.element.getElementById('stepTime');
    // this.breakMinutesInput = this.element.getElementById('breakTime');
  }


  // const breakTimeInput = document.getElementById('breakTime');
  // const bigBreaktimeInput = document.getElementById('bigBreakTime');
  // const stepsRoundCountImput = document.getElementById('stepsRoundCount');
  // const stepsDayCountInput = document.getElementById('stepsDayCount');
  // const soundNotificationCheckbox = document.getElementById('soundNotification');
  // const soundTickCheckbox = document.getElementById('soundTick');
  // const notificationCheckbox = document.getElementById('notification');
  // stepTimeInput.addEventListener('change', Settings.save);
  // breakTimeInput.addEventListener('change', Settings.save);
  // bigBreaktimeInput.addEventListener('change', Settings.save);
  // stepsRoundCountImput.addEventListener('change', Settings.save);
  // stepsDayCountInput.addEventListener('change', Settings.save);
  // soundNotificationCheckbox.addEventListener('change', Settings.save);
  // soundTickCheckbox.addEventListener('change', Settings.save);
  // notificationCheckbox.addEventListener('change', Settings.save);

  show() {
    this.element.classList.remove('modal-hide');

  }

  hide() {
    this.element.classList.add('modal-hide');
  }
};
