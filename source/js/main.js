import Settings from './settings.js';

const STEP_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

let stepsSeconds = STEP_TIME;
let timerStatus = "step";
let counterStepsNumber = 0;
let counterStepsNumbers = 8;

let timerIntervalCursor;

const timerElement = document.querySelector('.timer');
const timerMinutesElement = timerElement.querySelector('.timer__minutes');
const timerSecondsElement = timerElement.querySelector('.timer__seconds');

const counterElement = document.querySelector('.counter');
const counterNumberElement = counterElement.querySelector('.counter__number');
const counterNumbersElement = counterElement.querySelector('.counter__numbers');

const timerControlButton = document.querySelector('.page-main__control-timer-button');

const tickTimer = () => {
    stepsSeconds--;
    if (stepsSeconds === 0) {
        switch (timerStatus) {
            case 'step': onEndStep();
                break;
            case 'break': onEndBreak();
                break;
        }
    } else {
        rewriteTimerElement(stepsSeconds);
    }
};

const startTimer = () => {
    timerIntervalCursor = setInterval(tickTimer, 1000);
};

const stopTimer = () => {
    clearInterval(timerIntervalCursor);
    timerIntervalCursor = null;
};

const onEndStep = () => {
    stopTimer();
    timerStatus = 'break';
    stepsSeconds = BREAK_TIME;
    startTimer();
};

const onEndBreak = () => {
    stopTimer();
    timerStatus = 'step';
    stepsSeconds = STEP_TIME;
    startTimer();
    counterStepsNumber++;
    rewriteCounterNumberElement();
};

const rewriteTimerElement = (countTime) => {
    let minutes = Math.floor(countTime / 60);
    let seconds = countTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    timerMinutesElement.textContent = minutes;
    timerSecondsElement.textContent = seconds;
};

const rewriteCounterNumberElement = () => {
    counterNumberElement.textContent = counterStepsNumber;
};

const timerControlButtonClickHandler = () => {
    timerControlButton.classList.toggle('page-main__control-timer-button--play');
    timerControlButton.classList.toggle('page-main__control-timer-button--pause');
    if (timerIntervalCursor) {
        stopTimer();
    } else {
        startTimer();
    }
};

timerControlButton.addEventListener('click', timerControlButtonClickHandler);

const onKeyDown = (evt) => {
    if (evt.key === ' ') {
        timerControlButtonClickHandler();
    }
}

document.addEventListener('keydown', onKeyDown);

const settingsElement = document.querySelector('.settings');
const settingsCloseButton = settingsElement.querySelector('.settings__close-button');
const settingsOpenButton = document.querySelector('.page-header__settings-open-button');

const openSettings = () => {
    settingsElement.classList.remove('modal-hide');
    settingsCloseButton.addEventListener('click', closeSettings);
}

const closeSettings = () => {
    settingsElement.classList.add('modal-hide');
}

settingsOpenButton.addEventListener('click', openSettings);
settingsCloseButton.addEventListener('click', closeSettings);

const skipButtonHandler = () => {
    if (timerStatus === 'step') {
        onEndStep();
        skipButton.textContent = 'Skip break';
    } else {
        onEndBreak();
        skipButton.textContent = 'Skip step';
    }
}

const skipButton = document.querySelector('.page-main__skip-step-button');
skipButton.addEventListener('click', skipButtonHandler);

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

settingsFormInit();

const settings = new Settings();
settings.load();
