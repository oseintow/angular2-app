import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';


@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar-component/navbar-component.html',
  styleUrls: ['app/navbar-component/navbar-component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class NavbarComponent {

  constructor(private _router: Router) {}

  isCurrentRoute(route){
    var instruction = this._router.generate(route);
    return this._router.isRouteActive(instruction);
  }

}
