import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { NGXLogger } from 'ngx-logger';

import { selectItems } from 'src/app/state/itemsState/items.selectors';
import { Item } from '../../../models/items';


@Component({
	selector:    'app-items-browser',
	templateUrl: './items-browser.component.html',
	styleUrls: [ './items-browser.component.css' ]
})
export class ItemsBrowserComponent implements OnInit
{
    items$ = this.store.select(selectItems);
    currentItem : Item|null = null;

    filterString : string = "";

	constructor(
        private store: Store,
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.titleService.setTitle("YASC - Items");
        this.logger.log("Items browser loaded");
    }
}
