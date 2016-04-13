import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {HTTP_PROVIDERS, Headers, Http, RequestOptions, Request,RequestOptionsArgs,Connection, ConnectionBackend, Response} from 'angular2/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('request...');
    // return super.request(url, options).catch(res => {
            
    // });  
       console.log(this._defaultOptions);
       return super.request(url, options);   
  }

//   get(url: string, options?: RequestOptionsArgs) {
//     console.log('get...');
//     console.log(url);
//     try{
//         console.log(options);
//         let request = new Request(this._defaultOptions);
//         console.log(request);
//         // options.headers.delete('notify')
//         // console.log(options.headers)
    
//         // if(options !== null)
//         //    if(options.headers)
//         //      if(options.headers.has('notify'))
//         //          options.headers.delete('notify');
        
//         // return super.get(url, options).catch(res => {});
//         return super.get(url, options).catch(res =>{
//             console.log("mike is here");
//             console.log(res); 
//             return Observable.of(res);
//         });
        
//     }catch(e){
//         console.log(e);
//     }
//   }
}