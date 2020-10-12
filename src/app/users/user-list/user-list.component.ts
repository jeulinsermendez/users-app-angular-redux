import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.mode';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('users').subscribe(({users}) => {
      this.users = users;
    });

    this.store.dispatch(loadUsers());
    /*this.userService.getUsers()
        .subscribe(users => {
          console.log(users);
          this.users = users;
        });*/
  }

}
