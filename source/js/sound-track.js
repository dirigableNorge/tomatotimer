export default class SoundTrack {
  constructor(sound) {
    this.sound = sound;
  }

  play() {
    this.sound.play();
  }
}
