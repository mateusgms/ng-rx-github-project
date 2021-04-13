import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsersService } from "../_services/user.service";

export class HomeEffects {
    constructor(private actions$: Actions,
        private userService: UsersService) {
    }
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType('[Home Page] Load Users'),
        mergeMap(() => this.userService.getUsers().pipe(
            map(
                users => ({
                    type: '[GitHubUsers API] Users First load Sucess', payload: users
                })
            ),
            catchError(() => EMPTY)
        ))
    ))
}