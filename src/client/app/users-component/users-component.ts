import {Component, OnInit} from 'angular2/core';
import {UserService} from './user-service';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {User} from '../new-user-component/user';


@Component({
  selector: 'users-component',
  templateUrl: 'app/users-component/users-component.html',
  styleUrls: ['app/users-component/users-component.css'],
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private _user: UserService) {}

  ngOnInit(){
    this._user.getUsers()
      .subscribe(data => {
          this.users = data
      })
  }
  
  deleteUser(id, index){
      let deleteIt = confirm("Do you want to delete the user");
      
      if(deleteIt){
        return this._user.deleteUser(id)
            .subscribe(data => {
                console.log(data);
                this.users.splice(index, 1)
            });
      }
  }
  
  deleteUserId(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this._user.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}

}
