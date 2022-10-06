import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { Item } from '../../../models/itemBrowser';


@Component({
    selector:    'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: [ './item-detail.component.css' ]
})
export class ItemDetailComponent implements OnInit
{
    @Input()
    item : Item | null = null;

	constructor(
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.titleService.setTitle(`YASC - Item ${this.item?.id}`);
        this.logger.log(`Item detail for item ${this.item?.id} loaded`);
    }
}
