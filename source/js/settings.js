export default class Settings {
  constructor() {
    const defaultSettings = {
      stepMinutes: 25,
      breakMinutes: 5,
      bigBreakMinutes: 20,
      stepsRoundCount: 2,
      stepsDayCount: 8,
      soundNotification: false,
      soundTick: false,
      notification: false,
    };

    if(Settings.isLocaleStorageEnabled()) {
      if (localStorage.getItem('settings') === null){
        localStorage.setItem('settings', JSON.stringify(defaultSettings));
      }
      const LSSettings = localStorage.getItem('settings');
      this.state =  JSON.parse(LSSettings);
    }

    this.state = defaultSettings;
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

  get() {
    return this.state;
  }

  set(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  };
};
