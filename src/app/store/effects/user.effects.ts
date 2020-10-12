import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usersActions from '../actions/';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';






@Injectable()
export class UserEffects{

constructor(private actions$: Actions, private userService: UserService){}


loadUser$ = createEffect(
  () => this.actions$.pipe(
    ofType( usersActions.loadUser ),
    mergeMap(
      (action) => this.userService.getUserById(action.id)
      .pipe(
        map( user => usersActions.loadUserSucces({user: user}) ),
        catchError( error => of(usersActions.loadUserError({payload: error})))
      )
     )
  )
);
}
