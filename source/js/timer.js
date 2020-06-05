import SoundTrack from './sound-track.js';
const soundTrack = new SoundTrack(document.getElementById('tick'));

export default class Timer {
  constructor(DOMElement, time = 1500, soundTick = false, endTimeHandler) {
    this.element = DOMElement;
    this.intervalCursor = null;
    this.ticking = false;
    this.currentSeconds = time;
    this.soundTick = soundTick;
    this.onEnd = endTimeHandler;
    this._set(this.currentSeconds);
  }

  tick() {
    if(this.soundTick) soundTrack.play();

    this.currentSeconds--;
    if (this.currentSeconds === 0) {
      this.onEnd();
    } else {
      this._set(this.currentSeconds);
    }
  }

  start() {
    this.timerIntervalCursor = setInterval(this.tick.bind(this), 1000);
    this.ticking = true;
  }

  stop() {
    clearInterval(this.timerIntervalCursor);
    this.timerIntervalCursor = null;
    this.ticking = false;
  }

  updateSettings(soundTick) {
    this.soundTick = soundTick;
  }

  updateTime(time) {
    this.currentSeconds = time;
    if (!this.ticking) this._set(this.currentSeconds);
  }

  getTicking() {
    return this.ticking;
  }

  _set(countTime) {
    let minutes = Math.floor(countTime / 60);
    let seconds = countTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    this.element.textContent = `${minutes}:${seconds}`;
  }
};
