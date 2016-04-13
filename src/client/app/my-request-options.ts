import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, Headers, Http, BaseRequestOptions, Request} from 'angular2/http';

export class MyRequestOptions extends BaseRequestOptions {
  constructor (private _request: Request) {
    super();
    this.headers.delete('message');
    let v =this.headers.get('notify');
    // alert(v);
    
    try{
        let j = this._request.headers.get('notify');
        console.log(this._request.headers)
        // alert(j)
    }catch(e){
        // console.log(e);
    }
    
    this.headers.append('My-Custom-Header','MyCustomHeaderValue');
    
  }
} 
