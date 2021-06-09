import { Component } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n } from './datepicker-i18n';
import { LanguageService } from './language-service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
})
export class AppComponent {
  title: string = '';
  dateModel!: NgbDateStruct;

  alerts: Alert[] = [
    {
      type: 'success',
      message: 'This is an success alert',
    },
    {
      type: 'info',
      message: 'This is an info alert',
    },
    {
      type: 'warning',
      message: 'This is a warning alert',
    },
    {
      type: 'danger',
      message: 'This is a danger alert',
    },
    {
      type: 'primary',
      message: 'This is a primary alert',
    },
    {
      type: 'secondary',
      message: 'This is a secondary alert',
    },
    {
      type: 'light',
      message: 'This is a light alert',
    },
    {
      type: 'dark',
      message: 'This is a dark alert',
    },
  ];

  constructor(languageService: LanguageService) {
    languageService.setupTranslations();
    languageService.get('title').subscribe((title: string) => {
      this.title = title;
      this.alerts[0] = {
        type: 'success',
        message: title,
      };
    });
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
