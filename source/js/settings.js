export default class Settings {
  constructor() {
    this.default = {
      stepTime: 25,
      breakTime: 5,
      bigBreakTime: 20,
      stepsRoundCount: 2,
      stepsDayCount: 8,
      soundNotification: false,
      soundTick: true,
      notification: false,
    };
  }


  static isLocaleStorageEnabled() {
    try {
      localStorage.setItem('LSEnabled', 'enabled');
      localStorage.removeItem('LSEnabled');
      return true;
    } catch (error) {
      console.log(`Try to use localStorage: ${error}`)
      return false;
    }
  };

  load() {
    if(Settings.isLocaleStorageEnabled()) {
      if (localStorage.getItem('settings') === null){
        localStorage.setItem('settings', JSON.stringify(this.default));
      }
      const LSSettings = localStorage.getItem('settings');
      return JSON.parse(LSSettings);
    }
    return this.default;
  };

  save(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  };
};
