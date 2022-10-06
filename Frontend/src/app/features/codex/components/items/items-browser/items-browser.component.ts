import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { Item, ItemCategory } from '../../../models/itemBrowser';
import { ItemService } from '../../../services/item.service';


@Component({
	selector:    'app-items-browser',
	templateUrl: './items-browser.component.html',
	styleUrls: [ './items-browser.component.css' ]
})
export class ItemsBrowserComponent implements OnInit
{
    items : ItemCategory[] = [];
    currentItem : Item | null = null;

	constructor(
        private itemService : ItemService,
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.titleService.setTitle('YASC - Items');
        this.logger.log('Items browser loaded');

        this.retrieveItems();
    }

    retrieveItems(filter : string = "") : void
    {
        this.items = this.itemService.getItems(filter);
    }
}
