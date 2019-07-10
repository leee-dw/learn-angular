import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.scss']
})

export class WelcomeMsgComponent implements AfterViewInit {
  private static CHK_KEYUP_WAIT_SEC = 5000;
  userName: string;
  welcomeMsg;
  private isValid = false;

  constructor(public i18nSupporter: I18nSupportService) {
  }

  ngAfterViewInit(): void {
    const checkTouchedFn = () => {
      if (this.isValid) { return; }
      alert('이름을 입력해 주세요');
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onChange(name: string) {
    this.isValid = name.length > 0;
  }

  setName(name: string) {
    this.userName = name;
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }
}
