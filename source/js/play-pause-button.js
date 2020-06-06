export default class PlayPauseButton {
  constructor (DOMElement, onClickHandler) {
    this.button = DOMElement;
    this.button.addEventListener('click', onClickHandler);
  };

  setState(state = pause) {
    if (state === 'play') {
      this.button.classList.add('control-timer-button--play')
      this.button.classLIst.remove('control-timer-buttom--pause');
    } else {
      this.button.classList.add('control-timer-buttom--pause')
      this.button.classLIst.remove('control-timer-button--play');
    }
  }

  toggle() {
    this.button.classList.toggle('control-timer-button--play')
      this.button.classList.toggle('control-timer-buttom--pause');
  }

  focus() {
    this.button.focus(); 
  }
}
