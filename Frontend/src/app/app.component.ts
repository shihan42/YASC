import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadItemsRequested } from './state/itemsState/items.actions';


@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit
{
    constructor(private store: Store)
    {}

    ngOnInit() : void
    {
        console.log("load items requested");
        this.store.dispatch(loadItemsRequested());
    }
}
