import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';


@Component({
	selector:    'app-buildings-browser',
	templateUrl: './buildings-browser.component.html',
	styleUrls: [ './buildings-browser.component.css' ]
})
export class BuildingsBrowserComponent implements OnInit
{
    constructor(
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.titleService.setTitle('YASC - Buildings');
        this.logger.log('Buildings browser loaded');
    }
}
