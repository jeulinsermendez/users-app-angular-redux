import {createReducer, on} from '@ngrx/store';

import { User } from '../../models/user.mode';
import { loadUser, loadUserSucces, loadUserError } from '../actions/user.action';


export interface UserState {
  id: string,
  user: User ,
  loaded: boolean ,
  loading: boolean,
  error: any
}

export const userInitialState: UserState = {
  id: null,
  user: null ,
  loaded: false ,
  loading: false,
  error: null
}

const _userReducer = createReducer(userInitialState,
  on(loadUser, (state,{id}) => ({
    ...state,
    loading: true,
    id: id,
  })),
  on(loadUserSucces, (state, {user}) => ({...state, loading: false, lodaded: true, user: {...user}})),
  on(loadUserError, (state, {payload}) => ({
    ...state,
    loading: false,
    lodaded: false,
    error: payload}))

  );

  export function userReducer(state, action) {
    return _userReducer(state, action);
  }
