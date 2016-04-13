import {provide,Provider} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Angular2AppApp} from './app/angular2-app';
import {HTTP_PROVIDERS, RequestOptions, XHRBackend, Http, Request, RequestOptionsArgs} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MyRequestOptions} from './app/my-request-options';
import {CustomHttp} from './app/custom-http';


bootstrap(Angular2AppApp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(RequestOptions, { useClass: MyRequestOptions }),
    new Provider(Http, {
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new CustomHttp(backend, defaultOptions),
      deps: [XHRBackend, RequestOptions]
  })
   
]);




