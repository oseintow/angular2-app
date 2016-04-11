import {bootstrap} from 'angular2/platform/browser';
import {Angular2AppApp} from './app/angular2-app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(Angular2AppApp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);
