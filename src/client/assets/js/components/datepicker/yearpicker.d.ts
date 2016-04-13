import { OnInit } from 'angular2/core';
import { DatePickerInner } from './datepicker-inner';
export declare class YearPicker implements OnInit {
    datePicker: DatePickerInner;
    private title;
    private rows;
    constructor(datePicker: DatePickerInner);
    ngOnInit(): void;
    private getStartingYear(year);
}
