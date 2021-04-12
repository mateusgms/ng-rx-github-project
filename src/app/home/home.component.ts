import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { switchMap, tap, map, filter } from 'rxjs/operators';
import { UsersService } from '../_services/user.service';
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
      try {
        return this.usersService.getUsers(value)
      } catch (error) {
        return this.usersService.getUsers()
      }
     }),
    map((value) => typeof value == "object" ? [value] : value)
  )
  users$ = merge(this.allUsers$, this.inputFilter$)

  constructor(private usersService: UsersService) { }




}
