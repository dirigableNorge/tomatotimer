import Timer from './timer.js';
import Counter from './counter.js';
import PlayPauseButton from './play-pause-button.js';
import SkipButton from './skip-button.js';
import SettingsOpenButton from './settings-open-button.js';
import Settings from './settings.js';
import SettingsModal from './settings-modal.js';

const settings = new Settings();
const {stepMinutes, breakMinutes} = settings.get();

const stepsSeconds = stepMinutes * 60;
const breakSeconds = breakMinutes * 60;
let currentSeconds = stepsSeconds;
let currentStatus = "step";
let timerTicking = false;
let counterStepsNumber = 0;
let timerIntervalCursor;

const onEndStep = () => {
    currentStatus = 'break';
    currentSeconds = breakSeconds;
    counterStepsNumber++;
    counterElement.set(counterStepsNumber);
    if (!timerTicking) {
      timerElement.set(currentSeconds);
    }
};

const onEndBreak = () => {
  currentStatus = 'step';
  currentSeconds = stepsSeconds;
  if (!timerTicking) {
    timerElement.set(currentSeconds);
  }
};

const onEndBigBreak = () => {

}

const tickTimer = () => {
  currentSeconds--;
    if (currentSeconds === 0) {
        switch (currentStatus) {
            case 'step': onEndStep();
            break;
            case 'break': onEndBreak();
            break;
        }
    } else {
      timerElement.set(currentSeconds);
    }
};

const startTimer = () => {
    timerIntervalCursor = setInterval(tickTimer, 1000);
};

const stopTimer = () => {
    clearInterval(timerIntervalCursor);
    timerIntervalCursor = null;
};

const controlTimer = () => {
  playPauseButton.toggle();
  timerIntervalCursor ? stopTimer() : startTimer();
};

const skipAction = () => {
  console.log(currentStatus);
  if (currentStatus === 'step') {
    onEndStep();
  } else {
    onEndBreak();
  }
};

// const onKeyDown = (evt) => {
//     if (evt.key === ' ') {
//         controlTimer();
//     }
// }

// document.addEventListener('keydown', onKeyDown);

const counterElement = new Counter(document.querySelector('.counter'), 0);
const timerElement = new Timer(document.querySelector('.timer'));
const playPauseButton = new PlayPauseButton(document.querySelector('.control-timer-button'), controlTimer);
const skipButton = new SkipButton(document.querySelector('.skip-button'), skipAction);
const settingsElement = new SettingsModal(document.querySelector('.settings'));

const openSettings = () => {
    settingsElement.show();
}

const closeSettings = () => {
    settingsElement.hide();
}

const settingsOpenButton = new SettingsOpenButton(document.querySelector('.settings-button'), openSettings);

const settingsFormInit = () => {
    const settingsForm = document.getElementById('settingsForm');
    const stepTimeInput = document.getElementById('stepTime');
    const breakTimeInput = document.getElementById('breakTime');
    const bigBreaktimeInput = document.getElementById('bigBreakTime');
    const stepsRoundCountImput = document.getElementById('stepsRoundCount');
    const stepsDayCountInput = document.getElementById('stepsDayCount');
    const soundNotificationCheckbox = document.getElementById('soundNotification');
    const soundTickCheckbox = document.getElementById('soundTick');
    const notificationCheckbox = document.getElementById('notification');
    stepTimeInput.addEventListener('change', Settings.save);
    breakTimeInput.addEventListener('change', Settings.save);
    bigBreaktimeInput.addEventListener('change', Settings.save);
    stepsRoundCountImput.addEventListener('change', Settings.save);
    stepsDayCountInput.addEventListener('change', Settings.save);
    soundNotificationCheckbox.addEventListener('change', Settings.save);
    soundTickCheckbox.addEventListener('change', Settings.save);
    notificationCheckbox.addEventListener('change', Settings.save);
};
