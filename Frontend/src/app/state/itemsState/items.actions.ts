import { createAction, props } from "@ngrx/store";

import { Item } from "../../features/codex/models/items";


export enum ActionTypes
{
    LoadItemsRequested = '[Items API] Load Items Requested',
    LoadItems = '[Items API] Load Items Success'
}

export const loadItemsRequested = createAction(
    ActionTypes.LoadItemsRequested
);

export const loadItems = createAction(
    ActionTypes.LoadItems,
    props<{ payload: Item[] }>()
);
