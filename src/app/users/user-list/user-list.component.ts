import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.mode';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe(users => {
          console.log(users);
          this.users = users;
        });
  }

}
