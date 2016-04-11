import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Control, Validators, AbstractControl} from 'angular2/common';
import {RouteParams,  CanDeactivate, Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UserService} from '../users-component/user-service';
import {CustomValidators} from '../custom-validators';
import {StringMapWrapper, ListWrapper} from 'angular2/src/facade/collection';
import {User} from './user';

@Component({
  selector: 'new-user-component',
  templateUrl: 'app/new-user-component/new-user-component.html',
  styleUrls: ['app/new-user-component/new-user-component.css'],
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class NewUserComponent implements OnInit, CanDeactivate{
  id = null;
  title;
  user = new User();
  form: ControlGroup;

  constructor( private _routeParams: RouteParams, private _userService: UserService, private _fb: FormBuilder, private _router: Router) {

  }

  ngOnInit(){
    this.id = this._routeParams.get('id');
    this.title  = this.id ? "Edit User" : "Add User";
    
    if(this.id)
        this._userService.getUser(this.id)
            .subscribe(data =>{ this.user = data
                console.log(this.user)
            },
            response=>{
                if(response.status == 404){
                    this._router.navigate(['NotFound']);
                }
                
            })

      this.form = this._fb.group({
        name: ['', Validators.required],
        email: ['', Validators.compose([Validators.required,CustomValidators.isInvalidEmail])],
        phone: [],
        address: this._fb.group({
          street: [],
          suite:[],
          city: [],
          zipcode:[]
        })
      });
  }

  save(){
      
      if(this.user.id){
          this._userService.updateUser(this.user.id,this.form.value)
            .subscribe(data => console.log(data),
                response => console.log(response)
            )
      }else{
        this._userService.saveUser(this.form.value)
            .subscribe(data => console.log(data),
                response => console.log(response)
            )
       
    //    for(var contr in this.form.controls) {
    //     //    control.updateValue('');
    //     //    control.setErrors(null);
    //         console.log(contr.value);
    //     }
        
            this.form['_touched'] = false;
            StringMapWrapper.forEach(this.form.controls, (control: AbstractControl, name: string) => {
                control['_touched'] = false;
            });
            
            this.user = new User();
            
            if(!this.form.pristine)
                this._router.navigate(['Users']);
      }
  }
  
  /**
   * routerCanDeactivate
   */
  public routerCanDeactivate() {
      let close = true;
      if(!this.form.pristine){
          close = confirm("Are you sure you want to quit");
      }
      
      return close;
  }

}


