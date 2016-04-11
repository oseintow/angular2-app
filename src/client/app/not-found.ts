import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
  selector: 'not-found',
  template: `
    <div>Not Found</div>
  `,
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class NotFound {

}
