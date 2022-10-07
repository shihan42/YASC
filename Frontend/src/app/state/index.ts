import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { itemsReducer, ItemsState } from './itemsState/items.reducer';


export interface AppState
{
    itemState: ItemsState
}

export const reducers: ActionReducerMap<AppState> = {
    itemState: itemsReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
