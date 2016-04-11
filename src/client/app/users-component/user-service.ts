import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {User} from '../new-user-component/user';

@Injectable()
export class UserService{

    private _baseUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){}
    
    getUser(id: number){
        return this._http.get(this._baseUrl + "/" + id)
                .map(res => res.json());
    }

    getUsers(){
        return this._http.get(this._baseUrl)
                .map(res => res.json());
    }
    
    saveUser(user: User){
        return this._http.post(this._baseUrl,JSON.stringify(user))
            .map(res => res.json());
    }
    
    updateUser(id: number, user: User){
        return this._http.put(this._baseUrl + "/" + id, JSON.stringify(user))
            .map(res => res.json());
    }
    
    deleteUser(id: number){
        return this._http.delete(this._baseUrl + "/" + id)
                .map(res => res.json());
    }

}