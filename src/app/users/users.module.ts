import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent,
    UserComponent
  ]
})
export class UsersModule { }
