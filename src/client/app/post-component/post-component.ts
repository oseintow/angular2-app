import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from 'angular2/router';
import {PostService} from './post-service';
import {PostComment} from './post-comment';
import {Spinner} from '../spinner/spinner';


@Component({
  selector: 'post-component',
  templateUrl: 'app/post-component/post.html',
  styleUrls: ['app/post-component/post-component.css'],
  providers: [PostService],
  directives: [Spinner, PostComment],
  pipes: []
})
export class PostComponent implements OnInit{
  postId;
  post = {};
  postLoading;
  isCurrent;

  constructor(private _postService: PostService, private _routeParams: RouteParams) {
  }
  
  ngOnInit(){
      this.postId = this._routeParams.get('id');
      
      if(this.postId){
        this.isCurrent = true;
        this.getPost(this.postId);
      }
  }
  
  getPost(id){
      this.postLoading = true;
      this._postService.getPost(id)
        .subscribe(data => {
            this.post = data;
        },
        null,
        () => this.postLoading = false )
  }

}
