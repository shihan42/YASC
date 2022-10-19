import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';

import { Item } from '../../../models/items';


@Component({
    selector:    'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: [ './item-detail.component.css' ]
})
export class ItemDetailComponent implements OnChanges
{
    @Input()
    item : Item | null = null;

	constructor(
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnChanges(_changes : SimpleChanges): void
    {
        if (this.item !== null && this.item !== undefined)
        {
            this.titleService.setTitle(`${this.item?.name} - Item Browser - YASC`);
            this.logger.log(`Item detail for item ${this.item?.className} loaded`);
        }
    }
}
