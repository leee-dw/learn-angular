import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static LIMIT_CNT = 100;
  curVal = 0;
  manualVal = 0;

  colorByValue() {
    if (this.curVal > 0) { return 'green'; }
    if (this.curVal < 0) { return 'red'; }
    if (this.curVal === 0) { return 'grey'; }
  }

  inc() {
    const tempVal = this.curVal + 1;
    if (this.checkLimitCnt(tempVal)) {
      this.curVal = tempVal;
    }
  }

  dec() {
    const tempVal = this.curVal - 1;
    if (this.checkLimitCnt(tempVal)) {
      this.curVal = tempVal;
    }
  }

  setValueForcibly() {
    if (this.checkLimitCnt(this.manualVal)) {
      this.curVal = this.manualVal;
    }
    this.manualVal = 0;
  }

  checkLimitCnt(val) {
    if (Math.abs(val) < AppComponent.LIMIT_CNT) {
      return true;
    }
    const target = val > 0 ? '증가' : '감소';
    alert(`더 이상 ${target}시킬 수 없습니다.`);
    return false;
  }


}
