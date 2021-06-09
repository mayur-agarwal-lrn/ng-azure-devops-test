import { Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from './language-service';

@Injectable({
  providedIn: 'root',
})
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  CALENDAR_VALUES!: { [key: string]: any };

  constructor(languageService: LanguageService) {
    super();
    languageService
      .get('calender')
      .subscribe((calender: { [key: string]: any }) => {
        this.CALENDAR_VALUES = calender;
      });
  }

  getWeekdayShortName(weekday: number): string {
    if (this.CALENDAR_VALUES.weekdays)
      return this.CALENDAR_VALUES.weekdays[weekday - 1];

    return 'a';
  }
  getWeekLabel(): string {
    if (this.CALENDAR_VALUES.weekLabel) return this.CALENDAR_VALUES.weekLabel;
    return 'a';
  }
  getMonthShortName(month: number): string {
    if (this.CALENDAR_VALUES.months)
      return this.CALENDAR_VALUES.months[month - 1];

    return 'a';
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
