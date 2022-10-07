import { createReducer, on } from '@ngrx/store';

import { Item } from '../../features/codex/models/items';
import { loadItems } from './items.actions';


export interface ItemsState
{
    items : Item[];
    itemsLoaded : boolean;
}

export const initialState : ItemsState = {
    items: [],
    itemsLoaded : false
};

export const itemsReducer = createReducer(
    initialState,
    on(loadItems, (_state, { payload }) : ItemsState => ({ items: payload, itemsLoaded: true }))
);
