import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';

import {NavbarComponent} from "./navbar-component/navbar-component";
import {HomeComponent} from "./home-component/home-component";
import {PostsComponent} from "./post-component/posts-component";
import {UsersComponent} from "./users-component/users-component";
import {NewUserComponent} from "./new-user-component/new-user-component";
import {NotFound} from "./not-found";
import {AppLevelRouterOutlet} from './app-level-router-outlet';

@Component({
  selector: 'angular2-app-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/angular2-app.html',
  directives: [AppLevelRouterOutlet, NavbarComponent],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

@RouteConfig([
  { path: "/", name: "Home", component: HomeComponent, useAsDefault: true },
  { path: "/users", name: "Users", component: UsersComponent},
  { path: "/users/new", name: "NewUser", component: NewUserComponent},
  { path: "/users/:id/edit", name: "EditUser", component: NewUserComponent},
  { path: "/posts/...", name: "Posts", component: PostsComponent},
  { path: "/not_found", name: "NotFound", component: NotFound},
  { path: "/*other", name: "Other", redirectTo: ['Home']}
])
export class Angular2AppApp {}
