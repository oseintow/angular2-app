"use strict";
/*
 todo: general:
 1. Popup
 2. Keyboard support
 3. custom-class attribute support
 4. date-disabled attribute support
 5. template-url attribute support
 */
var datepicker_popup_1 = require('./datepicker/datepicker-popup');
var datepicker_1 = require('./datepicker/datepicker');
var datepicker_popup_2 = require('./datepicker/datepicker-popup');
exports.DatePickerPopup = datepicker_popup_2.DatePickerPopup;
var datepicker_2 = require('./datepicker/datepicker');
exports.DatePicker = datepicker_2.DatePicker;
exports.DATEPICKER_DIRECTIVES = [datepicker_1.DatePicker, datepicker_popup_1.DatePickerPopup];
