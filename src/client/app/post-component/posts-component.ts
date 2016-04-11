import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {PostService} from './post-service';
import {PostComponent} from './post-component';
import {PostComment} from './post-comment';
import {UsersComponent} from '../users-component/users-component';
import {Spinner} from '../spinner/spinner';
import {UserService} from '../users-component/user-service';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {AppLevelRouterOutlet as ROUTER_DIRECTIVES} from '../app-level-router-outlet';


@Component({
  selector: 'posts-component',
  templateUrl: 'app/post-component/post-component.html',
  styleUrls: ['app/post-component/post-component.css'],
  providers: [PostService, UserService],
  directives: [ROUTER_DIRECTIVES, Spinner, Alert],
  pipes: []
})
@RouteConfig([
  { path: "/", name: "Home", component: PostComponent, useAsDefault: true},
  { path: "/:id", name: "Post", component: PostComponent},
  { path: "/users", name: "Users", component: UsersComponent},
  { path: "/:id/comments", name: "PostComment", component: PostComment}
])
export class PostsComponent implements OnInit{
  posts = [];
  users = [];
  postLoading;
  toys: Array<any> = [
     {id: 1, name: "michael"}, 
     {id: 2, name: "daniel"} ,
     {id: 3, name: "joe"} ,
     {id: 4, name: "esther"} ,
     {id: 5, name: "samuel"} 
  ] ;

  constructor(private _postService: PostService, private _router: Router, 
    private _userService: UserService) {
      
  }
  
  ngOnInit(){
     this.getPosts(); 
     this.getUsers();
  }
  
  reloadPosts(filter){
      this.getPosts(filter);
  }
  
  getPosts(filter?){
      this.postLoading = true;
      return this._postService.getPosts(filter)
        .subscribe(data =>{ 
            this.posts = data 
            this.postLoading = false;
        })
  }
  
  getUsers(){
      return this._userService.getUsers()
        .subscribe(data =>{ 
            this.users = data 
        })
  }
  
  select(post){
      this._router.navigate(['Post',{id: post.id}]);
  }


}
