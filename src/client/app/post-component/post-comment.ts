import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from 'angular2/router';
import {PostService} from './post-service';
import {Spinner} from '../spinner/spinner';


@Component({
  selector: 'post-comment',
  templateUrl: 'app/post-component/post-comment.html',
  styles:[''],
  providers: [PostService],
  directives: [Spinner],
  pipes: []
})
export class PostComment implements OnInit{
  @Input() postId: number;
  postComments = [];
  postCommentLoading;

  constructor(private _postService: PostService) {
  }
  
  ngOnInit(){
      this.getPostComments(this.postId);
  }
  
  getPostComments(id){
      this.postCommentLoading = true;
      this._postService.getPostComments(id)
        .subscribe(data => {
            this.postComments = data;
        },
        null,
        () => this.postCommentLoading = false
        )
  }

}
