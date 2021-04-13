import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UserProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userLogin: string },
    private store: Store<{ user: User }>
  ) { }
  user$: Observable<User> = this.store.select(state => state.user)
  ngOnInit(): void {
    this.store.dispatch({ type: '[User Dialog] Load User' });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
