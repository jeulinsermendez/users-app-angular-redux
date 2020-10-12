import {createAction, props} from '@ngrx/store';
import { User } from '../../models/user.mode';

export const loadUser = createAction('[User] LoadUser', props<{id: string}>());
export const loadUserSucces = createAction('[User] LoadUserSuccess', props<{user: User}>());
export const loadUserError = createAction('[User] LoadUserSuccess', props<{payload: any}>());

