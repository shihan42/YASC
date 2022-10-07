import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ItemsState } from './items.reducer';


const selectItemState = createFeatureSelector<ItemsState>('itemState');

export const selectItems = createSelector(selectItemState, state => state.items);
export const selectItemsLoaded = createSelector(selectItemState, state => state.itemsLoaded);
