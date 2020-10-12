import {createAction, props} from '@ngrx/store';
import { User } from '../../models/user.mode';

export const loadUsers = createAction('[Users] LoadUsers');
export const loadUsersSucces = createAction('[Users] LoadUsersSuccess', props<{users: User[]}>());
export const loadUsersError = createAction('[Users] LoadUsersSuccess', props<{payload: any}>());

