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
      language: 'ua'
    };

    this.languagePack = {
      ua: {
        'stepMinutes': 'КРОК',
        'breakMinutes': 'ПАУЗА',
        'bigBreakMinutes': 'ВЕЛИКА ПАУЗА',
        'stepsRoundCount': 'КРОКІВ ДО ВЕЛИКОЇ ПАУЗИ',
        'stepsDayCount': 'КРОКІВ ЗАПЛАНОВАНО',
        'soundNotification': 'ЗВУКОВЕ СПОВІЩЕННЯ',
        'soundTick': 'ЗВУК ТАЙМЕРА',
        'notification': 'СПОВІЩЕННЯ'
      },
      eng: {
        'stepMinutes': 'STEP TIME',
        'breakMinutes': 'BREAK TIME',
        'bigBreakMinutes': 'BIG BREAK TIME',
        'stepsRoundCount': 'STEPS ROUND COUNT',
        'stepsDayCount': 'STEPS DAY COUNT',
        'soundNotification': 'SOUND NOTIFICATION',
        'soundTick': 'SOUND TICK',
        'notification': 'NOTIFICATION'
      }
    };

    if(Settings.isLocaleStorageEnabled()) {
      if (localStorage.getItem('settings') === null){
        localStorage.setItem('settings', JSON.stringify(defaultSettings));
      }
      this.state =  JSON.parse(localStorage.getItem('settings'));
    } else {
      this.state = defaultSettings;
    }
    this.updateListeners = [];
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

  addEventListener(eventType, callback) {
    if (eventType === 'update') {
      this.updateListeners.push(callback);
    }
  }

  get() {
    return this.state;
  }

  set(settings = this.state) {
    if(Settings.isLocaleStorageEnabled()) {
      localStorage.setItem('settings', JSON.stringify(settings));
    }

    this.state = settings;
    this.updateListeners.forEach(callback => {
      callback();
    });
  };

  get stepMinutes () {
    return this.state.stepMinutes;
  }

  get breakMinutes () {
    return this.state.breakMinutes;
  }

  get bigBreakMinutes () {
    return this.state.bigBreakMinutes;
  }

  get stepsRoundCount () {
    return this.state.stepsRoundCount;
  }

  get stepsDayCount () {
    return this.state.stepsDayCount;
  }

  get soundNotification () {
    return this.state.soundNotification;
  }

  get soundTick () {
    return this.state.soundTick;
  }

  get notification () {
    return this.state.notification;
  }

  get language () {
    return this.state.language;
  }

  getLanguagePack (language = 'ua') {
    return this.languagePack[language];
  }
};
