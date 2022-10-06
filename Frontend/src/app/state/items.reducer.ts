import { createReducer, on } from '@ngrx/store';
import { Item } from '../features/codex/models/items';

import { retrievedItems } from './items.actions';


export const initialState: ReadonlyArray<Item> = [];

export const itemsReducer = createReducer(
    initialState,
    on(retrievedItems, (_state, { items }) : ReadonlyArray<Item>=> items)
);
