import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Resource} from './resource';
// import {CustomHttp as Http} from './custom-http';

@Injectable()
export class TestingResource extends Resource{
    
    protected url: string = "http://jsonplaceholder.typicode.com/users";
    
    constructor(_http: Http){
        super(_http);
    }
    
}