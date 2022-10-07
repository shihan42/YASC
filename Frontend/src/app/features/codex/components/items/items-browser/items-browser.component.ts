import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NGXLogger } from 'ngx-logger';
import { take } from 'rxjs';

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
        private router : Router,
        private activeRoute: ActivatedRoute,
        private store: Store,
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.activeRoute.params.subscribe(params => {
            let paramsMap = convertToParamMap(params);
            if (paramsMap.has("itemId")) {
                let itemId = Number(paramsMap.get("itemId"));
                this.store.select(selectItems).pipe(take(1)).subscribe(items => {
                    let item = items.filter(i => i.id == itemId);
                    if (item.length == 1)
                    {
                        this.currentItem = item[0];
                    }
                });
            }
        });

        this.titleService.setTitle("Item Browser - YASC");
        this.logger.log("Items browser loaded");
    }
}
