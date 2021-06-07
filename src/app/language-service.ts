import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // set default language
  }

  setupTranslations() {
    let availableLanguages = ['en', 'hi'];
    this.translate.addLangs(availableLanguages);
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(
      availableLanguages.indexOf(browserLang) >= 0 ? browserLang : 'en'
    );
  }

  get(
    key: string | Array<string>,
    interpolateParams?: Object
  ): Observable<string | any> {
    return this.translate.get(key);
  }

  language(): string {
    return this.translate.currentLang;
  }
}
