import { Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from './language-service';

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  I18N_VALUES!: { [key: string]: any };

  constructor(languageService: LanguageService) {
    super();
    languageService
      .get('calender')
      .subscribe((calender: { [key: string]: any }) => {
        this.I18N_VALUES = calender;
      });
  }

  getWeekdayShortName(weekday: number): string {
    return this.I18N_VALUES.weekdays[weekday - 1];
  }
  getWeekLabel(): string {
    return this.I18N_VALUES.weekLabel;
  }
  getMonthShortName(month: number): string {
    return this.I18N_VALUES.months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
