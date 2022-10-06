import { createFeatureSelector } from '@ngrx/store';
import { Item } from '../features/codex/models/items';


export const selectItems = createFeatureSelector<ReadonlyArray<Item>>('items');
