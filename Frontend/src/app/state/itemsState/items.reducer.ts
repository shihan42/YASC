import { createReducer, on } from '@ngrx/store';

import { Item } from '../../features/codex/models/items';
import { loadItems } from './items.actions';


export interface ItemsState
{
    items : Item[];
    itemCategories : string[];
    itemsLoaded : boolean;
}

export const initialState : ItemsState = {
    items: [],
    itemCategories : [],
    itemsLoaded : false
};

export const itemsReducer = createReducer(
    initialState,
    on(loadItems, (_state, { payload }) : ItemsState => {
        let categories = new Set<string>();
        
        payload.forEach(i => categories.add(i.category));
        
        let newState = {items: payload, itemCategories: [...categories],  itemsLoaded: true };
        newState.itemCategories.sort();

        return newState;
    })
);
