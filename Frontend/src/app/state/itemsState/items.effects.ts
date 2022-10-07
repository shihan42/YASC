import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';


import { ItemService } from "../../features/codex/services/item.service";
import { ActionTypes } from "./items.actions";


@Injectable()
export class ItemsEffects
{
    loadItemsRequested$ = createEffect(() => { return this.actions$.pipe(
        ofType(ActionTypes.LoadItemsRequested),
        mergeMap(() => this.itemsService.retrieveItems()
            .pipe(
                map(items => ({ type: ActionTypes.LoadItems, payload: items })),
                catchError(() => EMPTY)
            ))
        ) }
    );

    constructor(
        private actions$: Actions,
        private itemsService : ItemService
    )
    {}
}
