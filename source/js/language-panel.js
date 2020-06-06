export default class LanguagePanel {
  constructor(DOMElement, language = 'ua', onChangeLanguage) {
    this.element = DOMElement;
    this.uaButton = document.getElementById('languageUA');
    this.engButton = document.getElementById('languageENG');
    this.uaButton.addEventListener('click', this.changeLanguage.bind(this));
    this.engButton.addEventListener('click', this.changeLanguage.bind(this));
    this.onChangeLanguage = onChangeLanguage;
    if(language === 'ua') {
      this.uaButton.setAttribute('disabled', null);
    } else {
      this.engButton.setAttribute('disabled', null);
    }
  }

  changeLanguage(evt) {
    this.engButton.removeAttribute('disabled');
    this.uaButton.removeAttribute('disabled');
    evt.target.setAttribute('disabled', null);
    this.onChangeLanguage(evt.target.textContent.toLowerCase());
  }
}
