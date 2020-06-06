import Timer from './timer.js';
import Counter from './counter.js';
import PlayPauseButton from './play-pause-button.js';
import SkipButton from './skip-button.js';
import SettingsOpenButton from './settings-open-button.js';
import Settings from './settings.js';
import SettingsModal from './settings-modal.js';
import SoundTrack from './sound-track.js';

const updateSettings = () => {
  timer.updateSettings(settings.soundTick);
}

const soundTrack = new SoundTrack(document.getElementById('action'));

const settings = new Settings();
settings.addEventListener('update', updateSettings);

let currentState = "step";
let currentStep = 0;
let stepsInRound = 0;

const onEndTime = () => {
  if (soundNotification) soundTrack.play();

  if (currentState === 'step') {
    currentStep++;
    counter.set(currentStep);
    if (stepsInRound === Number.parseInt(settings.stepsRoundCount)) {
      stepsInRound = 0;
      currentState = 'bigBreak';
      timer.updateTime(settings.bigBreakMinutes * 60);
    } else {
      stepsInRound++;
      currentState = 'break';
      timer.updateTime(settings.breakMinutes * 60);
    }
  } else {
    currentState = 'step';
    timer.updateTime(settings.stepMinutes * 60);
  }
}

const controlTimer = () => {
  playPauseButton.toggle();
  if(timer.getTicking()) {
    timer.stop();
  } else {
    timer.start();
  }
};

const skipAction = () => {
  onEndTime();
};

const timer = new Timer(document.querySelector('.timer'), (settings.stepMinutes * 60), settings.soundTick, onEndTime);
const counter = new Counter(document.querySelector('.counter'), currentStep);
const playPauseButton = new PlayPauseButton(document.querySelector('.control-timer-button'), controlTimer);
const skipButton = new SkipButton(document.querySelector('.skip-button'), skipAction);
const settingsElement = new SettingsModal(document.querySelector('.settings'), settings);
const settingsOpenButton = new SettingsOpenButton(document.querySelector('.settings-button'), settingsElement.show.bind(settingsElement));

window.onload = () => {
  playPauseButton.focus();
}
