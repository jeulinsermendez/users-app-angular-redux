import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUser } from '../../store/actions/user.action';
import { User } from '../../models/user.mode';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('user').subscribe( ({user}) => {
      this.user = user;
    });
    this.router.params.subscribe( ({id}) => {
      this.store.dispatch(loadUser({id}));
    })
  }

}
