import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class Resource{

    private _baseUrl = "";

    constructor(private _http: Http){}
    
    query(url: string, params: JSON, args?: JSON){
        this._baseUrl = url;
    }
    
    // (id: number){
    //     return this._http.get(this._baseUrl + "/" + id)
    //             .map(res => res.json());
    // }
    
    // getPostComments(id: number){
    //     return this._http.get(this._baseUrl + "/" + id + "/comments")
    //             .map(res => res.json());
    // }

    // getPosts(filter?){
    //     let url = this._baseUrl;
        
    //     if(filter && filter.userId){
    //         url += "?userId=" + filter.userId;
    //     }
            
    //     return this._http.get(url)
    //             .map(res => res.json());
    // }
    
    // // savePost(Post: Post){
    // //     return this._http.post(this._baseUrl,JSON.stringify(Post))
    // //         .map(res => res.json());
    // // }
    
    // // updatePost(id: number, Post: Post){
    // //     return this._http.put(this._baseUrl + "/" + id, JSON.stringify(Post))
    // //         .map(res => res.json());
    // // }
    
    // deletePost(id: number){
    //     return this._http.delete(this._baseUrl + "/" + id)
    //             .map(res => res.json());
    // }

}