import {Component,Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'spinner',
  templateUrl: 'app/spinner/spinner.html',
  styleUrls: ['app/spinner/spinner.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Spinner {
  @Input() visible = true;

  constructor() {}

}
