import { createAction, props } from "@ngrx/store";
import { Item } from "../features/codex/models/items";


export const retrievedItems = createAction(
    '[Items] Retrieve Items Success',
    props<{ items: ReadonlyArray<Item> }>()
  );
