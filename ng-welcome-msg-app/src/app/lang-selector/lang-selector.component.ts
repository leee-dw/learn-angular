import { Component, OnInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
import { LANG_METADATA } from '../lang-metadata';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {
  langCode: string;
  langMetadata = LANG_METADATA;
  constructor(
    public i18nSupport: I18nSupportService
  ) {
    this.langCode = this.i18nSupport.langCode;
  }

  ngOnInit() {
  }

  setLangCode(code: string) {
    this.langCode = code;
    this.i18nSupport.langCode = code;
  }

}
