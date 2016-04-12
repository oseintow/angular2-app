import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Resource} from './Resource';

@Injectable()
export class TestingResource extends Resource{
    
    protected url: string = "http://jsonplaceholder.typicode.com/users/:id";
    
    constructor(_http: Http){
        super(_http);
    }
    
}