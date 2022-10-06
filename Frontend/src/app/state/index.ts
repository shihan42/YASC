import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { Item } from '../features/codex/models/items';
import { itemsReducer } from './items.reducer';


export interface State
{
    items : ReadonlyArray<Item>;
}

export const reducers: ActionReducerMap<State> = {
    items: itemsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
