import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getTitle() {
    let header = by.css('h2');
    return element(header).getText();
  }

  getUnorderedList() {
    let list = by.css('ul');
    let listElement = element(list).isPresent();
  }

  getClearButton() {
    let button = by.css('button');
    return element(button);

  }

  getUsers() {
    let item = by.css('li');
    return element.all(item);

  }
}
