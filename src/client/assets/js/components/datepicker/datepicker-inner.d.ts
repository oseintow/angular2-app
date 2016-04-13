import { OnInit } from 'angular2/core';
export declare class DatePickerInner implements OnInit {
    datepickerMode: string;
    startingDay: number;
    yearRange: number;
    minDate: Date;
    maxDate: Date;
    minMode: string;
    maxMode: string;
    showWeeks: boolean;
    formatDay: string;
    formatMonth: string;
    formatYear: string;
    formatDayHeader: string;
    formatDayTitle: string;
    formatMonthTitle: string;
    onlyCurrentMonth: boolean;
    shortcutPropagation: boolean;
    customClass: Array<{
        date: Date;
        mode: string;
        clazz: string;
    }>;
    dateDisabled: any;
    initDate: Date;
    stepDay: any;
    stepMonth: any;
    stepYear: any;
    private modes;
    private dateFormatter;
    private uniqueId;
    private _activeDate;
    private selectedDate;
    private activeDateId;
    private refreshViewHandlerDay;
    private compareHandlerDay;
    private refreshViewHandlerMonth;
    private compareHandlerMonth;
    private refreshViewHandlerYear;
    private compareHandlerYear;
    private update;
    activeDate: Date;
    ngOnInit(): void;
    setCompareHandler(handler: Function, type: string): void;
    compare(date1: Date, date2: Date): number;
    setRefreshViewHandler(handler: Function, type: string): void;
    refreshView(): void;
    dateFilter(date: Date, format: string): string;
    isActive(dateObject: any): boolean;
    createDateObject(date: Date, format: string): any;
    split(arr: Array<any>, size: number): Array<any>;
    fixTimeZone(date: Date): void;
    select(date: Date): void;
    move(direction: number): void;
    toggleMode(direction: number): void;
    private getCustomClassForDate(date);
    private isDisabled(date);
}
