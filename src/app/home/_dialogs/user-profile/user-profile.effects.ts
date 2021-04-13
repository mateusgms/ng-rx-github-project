import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/app/_services/user.service';

export class UserProfileEffects {
    constructor(private actions$: Actions,
        private userService: UsersService) {

    }
    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType('[User Dialog] Load User'),
        mergeMap(() => this.userService.getUsers().pipe(
            map(
                user => ({
                    type: '[GitHubUser API] User loaded Sucess', payload: user
                })
            ),
            catchError(() => EMPTY)
        )
        )
    ))
}