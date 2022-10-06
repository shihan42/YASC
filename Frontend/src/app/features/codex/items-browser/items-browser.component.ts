import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';


@Component({
	selector:    'app-items-browser',
	templateUrl: './items-browser.component.html',
	styleUrls: [ './items-browser.component.css' ]
})
export class ItemsBrowserComponent implements OnInit
{
	constructor(
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.titleService.setTitle('YASC - Items');
        this.logger.log('Items browser loaded');
    }
}
