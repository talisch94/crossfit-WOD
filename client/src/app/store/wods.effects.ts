import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WodsService } from '../services/wods.service';
import { loadWods, loadWodsSuccess, loadWodsFailure } from './wods.actions';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class WodsEffects {
    loadWods$: Observable<Action>;

    constructor(
        private actions$: Actions,
        private wodsService: WodsService
    ) {
        this.loadWods$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loadWods),
                mergeMap(() =>
                    this.wodsService.getWods().pipe(
                        map(wods => loadWodsSuccess({ wods })),
                        catchError(error => of(loadWodsFailure({ error })))
                    )
                )
            )
        );
    }
}