import {Injectable} from 'angular2/core';
import {Headers, RequestOptions, HTTP_BINDINGS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import {CustomHttp as Http} from './custom-http';
import {Http} from 'angular2/http';



@Injectable()
export class Resource{

    protected url: string;
    protected baseUrl: string;
    protected notify = false;
    protected method = null;
    protected message = "";
    protected headers: Headers = new Headers({'Content-Type': 'application/json'});
    protected options: RequestOptions;
    protected params: Object = {};
    protected res;

    constructor(private _http: Http){}
    
    connect(notify = true, message="", args?): this{
        this.notify = notify;
        this.message = message;
        this.headers.append('notify', notify.toString());
        this.headers.append('message', message);
        this.options = new RequestOptions({headers: this.headers});
        return this;
    }
    
    query(params?, args?){
        this.params = params;
        this.formatUrl();
        this.res = this._http.get(this.baseUrl,this.options)
            .map(res => res.json());

        return this.response();
    }
    
    get(params, query_string?){
        this.params = params;
        this.formatUrl();
        this.res = this._http.get(this.baseUrl,this.options)
            .map(res => res.json());
                 
        return this.response();
    }
    
    post(params, args?){
        this.params = params;
        this.formatUrl();
        this.res = this._http.post(this.baseUrl,JSON.stringify(params),this.options)
            .map(res => res.json());
            
        return this.response();
    }
    
    put(params, args?){
        this.params = params;
        this.formatUrl();
        this.res = this._http.put(this.baseUrl,JSON.stringify(params),this.options)
            .map(res => res.json());
            
        return this.response();
    }
    
    delete(params, args?){
        this.params = params;
        this.formatUrl();
        this.res = this._http.delete(this.baseUrl,this.options)
            .map(res => res.json());
            
        return this.response();
    }
    
    private formatUrl(method? : string): void{
        this.baseUrl = this.url;
        let protocol: string = "";
        let url: string  = "";
        let uri: Array<any> = [];
        if(this.baseUrl.indexOf("https://") > -1){
            protocol = this.baseUrl.substr(0,8);
            url = this.baseUrl.substr(8, this.baseUrl.length);
        }else if(this.baseUrl.indexOf("http://") > -1){
            protocol = this.baseUrl.substr(0,7);
            url = this.baseUrl.substr(7, this.baseUrl.length);
        }
       
       let lastUrlChar = url.slice(-1);
        url = (lastUrlChar == "/") ? url.slice(0, -1) : url;
        uri = url.split("/");
        
        uri.forEach((element,key) => {
            if(element.indexOf(":") > -1){
                let elementKey = element.substr(1,element.length);
                if(this.params.hasOwnProperty(elementKey)){
                    uri[key] = this.params[elementKey];
                    delete this.params[elementKey];
                }else if(key == uri.length-1){
                    uri.pop();
                }else{
                    uri[key] = undefined;
                }
            }
        });
        
        this.baseUrl = protocol;
        uri.forEach((element,key) => {
            this.baseUrl += (key!==uri.length-1) ? element + "/" : element
        })
        
        this.baseUrl = (lastUrlChar == "/") ? this.baseUrl + lastUrlChar : this.baseUrl;
        
    }
    
    response(){
        this.res.subscribe(data => console.log(data), err => console.log(err));
        // response.subscribe(res => console.log(res))
        return this.res;
    }
    
    
   

}