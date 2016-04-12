import {Injectable} from 'angular2/core';
import {Http,Headers, RequestOptions, HTTP_BINDINGS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class Resource{

    protected url: string;
    protected baseUrl: string;
    protected headers: Headers = new Headers({'Content-Type': 'application/json'});
    protected options: RequestOptions;
    protected params: Object = {};

    constructor(private _http: Http){}
    
    connect(notify = true, message="", args?): this{
        this.headers.append('notify', notify.toString());
        this.headers.append('message', message);
        this.options = new RequestOptions({headers: this.headers});
        return this;
    }
    
    query(params?, args?){
        this.params = params;
        this.formatUrl();
        return this._http.get(this.baseUrl,this.options)
                 .map(res => res.json());
    }
    
    get(params, args?){
        this.params = params;
        this.formatUrl();
        return this._http.get(this.baseUrl,this.options)
                 .map(res => res.json());
    }
    
    post(params, args?){
        this.params = params;
        this.formatUrl();
        return this._http.post(this.baseUrl,JSON.stringify(params),this.options)
            .map(res => res.json());
    }
    
    put(params, args?){
        this.params = params;
        this.formatUrl();
        return this._http.put(this.baseUrl,JSON.stringify(params),this.options)
            .map(res => res.json());
    }
    
    delete(params, args?){
        this.params = params;
        this.formatUrl();
        return this._http.delete(this.baseUrl,this.options)
            .map(res => res.json());
    }
    
    private formatUrl(): void{
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
        
        uri = url.split("/");
        
        uri.forEach((element,index) => {
            if(element.indexOf(":") > -1){
                let key = element.substr(1,element.length);
                if(this.params.hasOwnProperty(key)){
                    console.log("key is found");
                    console.log("am here");
                    uri[index] = this.params[key];
                }
            }
        });
        
        this.baseUrl = protocol;
        
        uri.forEach(element => {
            this.baseUrl += element + "/"
        })
        
       console.log(this.baseUrl);
        
    }
   

}