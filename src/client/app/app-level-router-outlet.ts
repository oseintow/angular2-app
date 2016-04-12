import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {UserService} from './users-component/user-service';
import {TestingResource} from './testing-resource';


@Directive({
    selector: 'router-outlet',  
    providers: [UserService, TestingResource]
})
export class AppLevelRouterOutlet extends RouterOutlet{
    
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string, private _userService: UserService, private _testingResource: TestingResource) {
                  
    super(_elementRef, _loader, _parentRouter, nameAttr);
    console.log("i got here");
    
    this._testingResource.connect().get({id:2})
        .subscribe(data => console.log(data));
    
    this.parentRouter = _parentRouter;
    this.publicRoutes = {
      '/login': true,
      '/signup': true
    };
    // publicRoutes will be the routes auth is not needed for.
  }

  activate(instruction: ComponentInstruction): Promise<any> {
    console.log("testing");
    var url = this.parentRouter.lastNavigationAttempt;
    console.log(url);
    console.log(instruction);
    

    // this.parentRouter.navigate(['Posts','Post',{id:3}]);
    // this.parentRouter.navigateByUrl('/posts/2');
    // if (!this.publicRoutes[url] && this._userService.getAuth()) {
    //   // todo: redirect to Login, may be there a better way?
    //   this.parentRouter.navigateByUrl('/login');
    // }
    
    return super.activate(instruction);
    // we return super.activate(instruction) here so the router can activate the requested route and it's components.
  }
  
  deactivate(nextInstruction: ComponentInstruction): Promise<any> {
      console.log("last");
      console.log(nextInstruction);
      return super.deactivate(nextInstruction);
  }
    
}