import { Component } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n } from './datepicker-i18n';
import { LanguageService } from './language-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
})
export class AppComponent {
  title: string = '';
  dateModel!: NgbDateStruct;

  constructor(languageService: LanguageService) {
    languageService.setupTranslations();
    languageService.get('title').subscribe((title: string) => {
      this.title = title;
    });
  }
}
