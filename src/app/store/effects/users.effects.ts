import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usersActions from '../actions/users.actions';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';





@Injectable()
export class UsersEffects{

constructor(private actions$: Actions, private userService: UserService){}


loadUsers$ = createEffect(
  () => this.actions$.pipe(
    ofType( usersActions.loadUsers ),
    mergeMap(
      () => this.userService.getUsers()
      .pipe(
        map( users => usersActions.loadUsersSucces({users: users}) ),
        catchError( error => of(usersActions.loadUsersError({payload: error})))
      )
     )
  )
);
}
