import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { merge, Observable } from 'rxjs';
import { switchMap, tap, map, filter } from 'rxjs/operators';
import { UsersService } from '../_services/user.service';
import { UserProfileComponent } from './_dialogs/user-profile/user-profile.component';
import { UserReposComponent } from './_dialogs/user-repos/user-repos.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usersInput = new FormControl();
  allUsers$ = this.usersService.getUsers();
  inputFilter$ = this.usersInput.valueChanges.pipe(
    filter((value) => value.length >= 4 || !value.length),
    switchMap((value) => {
      if (value == '') return this.usersService.getUsers();
      return this.usersService.getUsers(value)
    }),
    map((value) => typeof value == "object" ? [value] : value)
  )
  users$ = merge(this.allUsers$, this.inputFilter$)

  constructor(private usersService: UsersService, public dialog: MatDialog) { }

  openUserProfile(user: string): void {

    const dialogRef = this.dialog.open(UserProfileComponent, {
      width: '250px', data: {
        userLogin: user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
  openUserRepos(user: string): void {

    const dialogRef = this.dialog.open(UserReposComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

}
