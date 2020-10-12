import {createReducer, on} from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSucces } from '../actions/users.actions';
import { User } from '../../models/user.mode';


export interface UsersState {
  users: User[] ,
  loaded: boolean ,
  loading: boolean,
  error: any
}

export const usersInitialState: UsersState = {
  users: [] ,
  loaded: false ,
  loading: false,
  error: null
}

const _userReducer = createReducer(usersInitialState,
  on(loadUsers, state => ({...state, loading: true})),
  on(loadUsersSucces, (state, {users}) => ({...state, loading: false, lodaded: true, users: [...users]})),
  on(loadUsersError, (state, {payload}) => ({
    ...state,
    loading: false,
    lodaded: false,
    error: payload}))

  );

  export function usersReducer(state, action) {
    return _userReducer(state, action);
  }
